from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, ProfileSetViewSet, ProfileSetListView , create_profileset , update_profile_set, generate_profiles , search_profiles

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'profileset', ProfileSetViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('generate-profiles/', generate_profiles, name='generate-profiles'),
    path('profilesets/', ProfileSetListView.as_view(), name='profile-set-list'),
    path('create_profileset/', create_profileset, name='create_profileset'), 
    path('update_profileset/<int:profileset_id>/', update_profile_set, name='update_profile_set'),
    path('profile/', search_profiles, name='search-profiles'),  
]


# List all UserProfile instances: GET /userprofiles/

# Create a new UserProfile instance: POST /userprofiles/

# Retrieve a specific UserProfile instance: GET /userprofiles/{id}/

# Update a specific UserProfile instance: PUT /userprofiles/{id}/

# Partially update a specific UserProfile instance: PATCH /userprofiles/{id}/

# Delete a specific UserProfile instance: DELETE /userprofiles/{id}/

# List all UserProfileSet instances: GET /userprofilesets/

# Create a new UserProfileSet instance: POST /userprofilesets/

# Retrieve a specific UserProfileSet instance: GET /userprofilesets/{id}/

# Update a specific UserProfileSet instance: PUT /userprofilesets/{id}/

# Partially update a specific UserProfileSet instance: PATCH /userprofilesets/{id}/

# Delete a specific UserProfileSet instance: DELETE /userprofilesets/{id}/