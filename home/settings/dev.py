'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['*']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

CORS_ORIGIN_WHITELIST = (
    'https://localhost:3000',
)

STRIPE_PUBLISH_KEY = 'pk_test_51KJiJWSHLi0vJZWhEMxERjgJZmYh84cFgzIqq5cxBvo2o4RSbYsaQ4I6ytl34bmXH9c6uQoIuaQPR97WX5fhAdXC00JGlWvnCh'
STRIPE_SECRET_KEY = 'sk_test_51KJiJWSHLi0vJZWhVNoBBAUmwUPuaOhBzi6PxlTnApahm7CxvUNnvNpyNRyu39EpWH24VYLVcP2mEwYrbSqu2Fmm006rkVJqLR'
CORS_ORIGIN_ALLOW_ALL = True

import django_heroku
django_heroku.settings(locals())