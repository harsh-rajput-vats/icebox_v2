from rest_framework import serializers
from .models import Profile
from .models import ProfileSet

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileSetSerializer(serializers.ModelSerializer):
    profiles = ProfileSerializer(many=True)
    class Meta:
        model = ProfileSet
        fields ="__all__"
    

class ProfileSetSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProfileSet
        fields = ('id','name')