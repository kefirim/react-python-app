

#path est une fonction qui sert à définir des URL spécifiques. 
#Chaque URL correspond à une vue.

from django.urls import path

#Cela importe le fichier views.py de ton application actuelle (base ici). 
#Ainsi, tu peux appeler les fonctions définies dans views.py.
from base.views import user_views as views


#Cette liste contient toutes les routes (ou chemins d'accès) définies pour ton application.
urlpatterns = [
    #'' : Définit l'URL de base, c'est-à-dire http://127.0.0.1:8000/.
    #views.getRoutes : Associe cette URL à la vue getRoutes.
    #name='routes' : Donne un nom à cette route (utile pour la référencer ailleurs dans ton projet).
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='users-profile'),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('register/', views.registerUser, name='register'),
    path('', views.getUsers, name='users'),
    
]