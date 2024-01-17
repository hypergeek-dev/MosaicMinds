from django.db import IntegrityError
from rest_framework import serializers
from favourites.models import Favourite


class FavouriteSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = favourite
        fields = ['id', 'created_at', 'owner', 'meeting']

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })
