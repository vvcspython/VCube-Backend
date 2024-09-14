from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .decorators import token_required
from django.shortcuts import get_object_or_404
from .models import (
    BatchData,
    BatchAttendance,
    StudentData,
    StudentAttendance,
    CoursesData,
    AdminMessages,
    BatchMessagesData,
    StudentMessagesData,
    CourseFeedbackData,
    PlacementFeedbackData,
    PlacementPosts,
    BatchToStudentMessagesData,
    AssessmentQuestionsData,
    ClassRecordingsData,
    StudentWatchTimeData,
    PermissionsData,
    FeedbackFormLists
)
from .serializers import (
    BatchDataSerializer,
    BatchAttendanceSerializer,
    StudentDataSerializer,
    StudentAttendanceSerializer,
    CourseDataSerializer,
    AdminMessagesSerializer,
    BatchMessagesDataSerializer,
    StudentMessagesDataSerializer,
    CourseFeedbackDataSerializer,
    PlacementFeedbackDataSerializer,
    PlacementPostsDataSerializer,
    BatchToStudentMessagesDataSerializer,
    AssessmentQuestionsDataSerializer,
    ClassRecordingsDataSerializer,
    StudentWatchTimeDataSerializer,
    PermissionsDataSerializer,
    FeedbackFormListsSerializer
)



@method_decorator(token_required, name='dispatch')
class ManagingDataView(APIView):

    model_mapping = {
        'batch_data': (BatchData, BatchDataSerializer),
        'batch_attendance': (BatchAttendance, BatchAttendanceSerializer),
        'student_data': (StudentData, StudentDataSerializer),
        'student_attendance': (StudentAttendance, StudentAttendanceSerializer),
        'courses_data': (CoursesData, CourseDataSerializer),
        'admin_messages': (AdminMessages, AdminMessagesSerializer),
        'batch_messages': (BatchMessagesData, BatchMessagesDataSerializer),
        'student_messages': (StudentMessagesData, StudentMessagesDataSerializer),
        'course_feedback': (CourseFeedbackData, CourseFeedbackDataSerializer),
        'placement_feedback': (PlacementFeedbackData, PlacementFeedbackDataSerializer),
        'placements_posts': (PlacementPosts, PlacementPostsDataSerializer),
        'batch_to_student_messages': (BatchToStudentMessagesData, BatchToStudentMessagesDataSerializer),
        'assessment_questions': (AssessmentQuestionsData, AssessmentQuestionsDataSerializer),
        'class_recordings' : (ClassRecordingsData, ClassRecordingsDataSerializer),
        'student_watchtime' : (StudentWatchTimeData, StudentWatchTimeDataSerializer),
        'permissions_data' : (PermissionsData, PermissionsDataSerializer),
        'feedbackforms-list' : (FeedbackFormLists, FeedbackFormListsSerializer)
    }

    def get_model_and_serializer(self, model_name):
        return self.model_mapping.get(model_name)

    
    def get(self, request, model_name=None, id=None, course=None):
        model, serializer_class = self.get_model_and_serializer(model_name)
        
        if not model:
            return Response({"detail": "Model not found."}, status=status.HTTP_404_NOT_FOUND)
        
        if id is not None:
            try:
                if model_name in ['student_attendance', 'student_watchtime', 'batch_to_student_messages']:
                    instances = model.objects.filter(StudentId=id)
                elif model_name == 'batch_attendance':
                    instances = model.objects.filter(BatchID=id)
                else:
                    instance = model.objects.get(pk=id)
                    instances = [instance]
                
                serializer = serializer_class(instances, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except model.DoesNotExist:
                return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
        
        if course:
            queryset = model.objects.filter(Course=course)
        else:
            queryset = model.objects.all()

        serializer = serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, model_name):
        model, serializer_class = self.get_model_and_serializer(model_name)
        if not model:
            return Response({"detail": "Model not found."}, status=status.HTTP_404_NOT_FOUND)
        serializer = serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def put(self, request, model_name, id=None):
        model, serializer_class = self.get_model_and_serializer(model_name)
        if not model:
            return Response({"detail": "Model not found."}, status=status.HTTP_404_NOT_FOUND)

        object_id = id or request.data.get('id')
        
        if object_id is None:
            return Response({"detail": "ID not provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        instance = get_object_or_404(model, pk=object_id)

        serializer = serializer_class(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def patch(self, request, model_name, id=None):
        model, serializer_class = self.get_model_and_serializer(model_name)
        if not model:
            return Response({"detail": "Model not found."}, status=status.HTTP_404_NOT_FOUND)

        object_id = id or request.data.get('id')
        
        if object_id is None:
            return Response({"detail": "ID not provided."}, status=status.HTTP_400_BAD_REQUEST)
        
        instance = get_object_or_404(model, pk=object_id) 

        serializer = serializer_class(instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self, request, model_name, id=None):
        model, serializer_class = self.get_model_and_serializer(model_name)
        if not model:
            return Response({"detail": "Model not found."}, status=status.HTTP_404_NOT_FOUND)

        object_id = id or request.data.get('id')

        if object_id is None:
            return Response({"detail": "ID not provided."}, status=status.HTTP_400_BAD_REQUEST)

        instance = get_object_or_404(model, pk=object_id)
        
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
