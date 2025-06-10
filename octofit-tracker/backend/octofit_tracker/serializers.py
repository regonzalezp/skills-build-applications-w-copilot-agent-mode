from rest_framework import serializers
from .models import User, Team, Activity, Leaderboard, Workout

class ObjectIdField(serializers.Field):
    def to_representation(self, value):
        return str(value)

class UserSerializer(serializers.ModelSerializer):
    _id = ObjectIdField()
    class Meta:
        model = User
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    _id = ObjectIdField()
    class Meta:
        model = Team
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    _id = ObjectIdField()
    class Meta:
        model = Activity
        fields = '__all__'

class LeaderboardSerializer(serializers.ModelSerializer):
    _id = ObjectIdField()
    class Meta:
        model = Leaderboard
        fields = '__all__'

class WorkoutSerializer(serializers.ModelSerializer):
    _id = ObjectIdField()
    class Meta:
        model = Workout
        fields = '__all__'
