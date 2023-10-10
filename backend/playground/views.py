from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from django.db.models import Q
from .models import Profile, ProfileSet
from .serializer import ProfileSerializer, ProfileSetSerializer , ProfileSetSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from faker import Faker
from PIL import Image, ImageDraw
import numpy as np
import base64
import io
import random
from . import face_data
from . import fp_data

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileSetViewSet(viewsets.ModelViewSet):
    queryset = ProfileSet.objects.all()
    serializer_class = ProfileSetSerializer

class ProfileSetListView(APIView):
    def get(self, request):
        profile_sets = ProfileSet.objects.all()
        serializer = ProfileSetSerializers(profile_sets, many=True)
        return Response(serializer.data)

@csrf_exempt
def generate_profiles(request):
    if request.method == 'POST':
        data = json.loads(request.body)  
        n = data.get('number',1)
        profiles = []
        fake = Faker('en_IN')
        l=0
        for _ in range(n):
            profile = {
                'name': fake.name(),
                'address': fake.address(),
            }
            min_value = 10**11  # Minimum 12-digit number
            max_value = (10**12) - 1  # Maximum 12-digit number
            profile['id']=l
            profile['uid']=random.randint(min_value, max_value)
            l=l+1
            # Generate a random face image
            face_image = face_data.face_images[random.randint(0, 18)]
            profile['face_path'] = face_image

            # Generate 10 random fingerprints
            profile['fingerprint_1']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_2']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_3']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_4']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_5']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_6']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_7']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_8']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_9']=fp_data.fingerprints[random.randint(0,19)]
            profile['fingerprint_10']=fp_data.fingerprints[random.randint(0,19)]
            profiles.append(profile)

        return JsonResponse({'profiles': profiles})

    return JsonResponse({'error': 'Invalid request method'})

def generate_random_image():
    width, height = 200, 200  # You can adjust the image dimensions
    image = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(image)
    for _ in range(1000):
        x, y = np.random.randint(0, width), np.random.randint(0, height)
        r, g, b = np.random.randint(0, 256), np.random.randint(0, 256), np.random.randint(0, 256)
        draw.point((x, y), fill=(r, g, b))
    return image

def image_to_base64(image):
    image_bytes = io.BytesIO()
    image.save(image_bytes, format="PNG")
    image_data = image_bytes.getvalue()
    base64_encoded = base64.b64encode(image_data).decode("utf-8")
    return base64_encoded

@csrf_exempt 
def create_profileset(request):
    if request.method == 'POST':
        data = json.loads(request.body)  
        profile_ids = data.get('profile_ids', [])
        profileset_name = data.get('profileset_name', '') 
        if profileset_name:  
            new_profileset = ProfileSet.objects.create(name=profileset_name)
            
            profiles = Profile.objects.filter(id__in=profile_ids)
            new_profileset.profiles.add(*profiles)
            
            return JsonResponse({'message': 'ProfileSet created successfully.'})
        else:
            return JsonResponse({'message': 'ProfileSet name is required.'}, status=400)
    
    return JsonResponse({'message': 'Invalid request method.'}, status=400)

@csrf_exempt
def update_profile_set(request, profileset_id):
    profileset = get_object_or_404(ProfileSet, id=profileset_id)

    if request.method == 'DELETE':
        try:
            data = json.loads(request.body)
            profiles_to_delete = data.get('profiles_List', [])
            
            profiles_to_delete = Profile.objects.filter(id__in=profiles_to_delete)
            profileset.profiles.remove(*profiles_to_delete)
            
            return JsonResponse({'message': 'Profiles removed from ProfileSet successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
    elif request.method == 'PUT':
        try:
            data = json.loads(request.body)
            profiles_to_delete = data.get('profiles_List', [])
            
            profiles_to_delete = Profile.objects.filter(id__in=profiles_to_delete)
            profileset.profiles.add(*profiles_to_delete)
            
            return JsonResponse({'message': 'Profiles added from ProfileSet successfully'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        
    else: 
        return JsonResponse({'error': 'Only PUT requests are allowed'}, status=405)
    
@csrf_exempt    
def search_profiles(request):
    data = json.loads(request.body)
    words = data.get('word', '').split() 
    matching_profiles = Profile.objects.none()
    for word in words:
        profiles_for_word = Profile.objects.filter(Q(name__icontains=word) | Q(address__icontains=word))
        matching_profiles |= profiles_for_word  # Combine 
    serializer = ProfileSerializer(matching_profiles, many=True)

    return JsonResponse(serializer.data, safe=False)