from django.urls import path
from .import views
from .import users
from .import student_view
from .import managing_data
from .import code_execute

urlpatterns = [
    path('user/login/', users.LoginView.as_view(), name='user-login'),
    path('user/create/',users.NewUserCreate.as_view(), name='new-user-create'),
    path('check/username/',users.CheckUsernameView.as_view(), name='check-username'),
    path('check/password/',users.CheckUserPassword.as_view(), name='check-password'),
    path('check/user/',users.CheckUser.as_view(), name='check-user'),
    path('check/user/details/',users.CheckUserDetails.as_view(),name='check-user-details'),
    path('users/list/<str:course>/',users.UsersListView.as_view(), name='users-course-list'),
    path('users/list/',users.UsersListView.as_view(), name='users-list'),
    path('users/', users.UserView.as_view(), name='users'),
    path('user/update/', users.UserDetailUpdate.as_view(), name='user_update'),
    path('check/email/',users.CheckEmailView.as_view(), name='check-email'),
    path('user/check-auth/', users.CheckAuthView.as_view(), name='check_auth'),
    path('change/user/permission/',users.ChangeUserPermission.as_view(),name='change-user-permission'),
    path('delete/user/',users.UserDelete.as_view(),name='change-user-permission'),
    path('student/login/',student_view.StudentLoginView.as_view(), name='student-login'),
    path('check/student/email/',student_view.CheckStudentMailView.as_view(), name='check-student-email'),
    path('check/student/auth/',student_view.CheckStudentAuthView.as_view(), name='check-student-auth'),
    path('student/update/<int:id>/',student_view.StudentDataUpdateView.as_view(), name='student-update'), 
    path('get/student/details/<int:id>/',student_view.StudentDataListView.as_view(), name='student-update'),
    path('sendmail/',views.SendMailView.as_view(), name='send-mail'),
    path('reset/user/password/',users.PasswordResetView.as_view(), name='reset-user-password'),
    path('validate/otp/<str:user_id>/',views.ValidateOTPView.as_view(), name='validate-otp'),
    path('users-count/',views.User_Count, name='users-count'),
    path('student/config/<int:id>/',student_view.StudentConfigDataView.as_view(), name='student-config'),
    path('get/csrf/',views.get_csrf_token, name='get-csrf'),
    
    path('manage/data/<str:model_name>/', managing_data.ManagingDataView.as_view(), name='model-list-create'),
    path('manage/data/<str:model_name>/<int:id>/', managing_data.ManagingDataView.as_view(), name='model-retrieve-update-delete'),
    path('manage/data/<str:model_name>/course/<str:course>/', managing_data.ManagingDataView.as_view(), name='model-course-filter'),
    path('manage/student/data/', managing_data.ManageStudentData.as_view(), name='manage-student-data'),
    path('delete/student/attandance/data/<int:id>/', managing_data.ManageStdAttandanceData.as_view(), name='manage-std-att-data'),
    path('delete/batch/attandance/data/<int:id>/', managing_data.ManageBatchAttandanceData.as_view(), name='manage-batch-att-data'),
    
    path('create/<str:course>/user-<str:username>/drive-password/', users.CreateUserDrivePassword.as_view(), name='create-user-drive-password'),
    path('manage/<str:course>/user-<str:username>/drive-data/', users.UsersDriveDataView.as_view(), name='manage-user-drive-data'),
    path('manage/<str:course>/user-<str:username>/drive-data/<int:drive_id>/', users.UsersDriveDataView.as_view(), name='manage-user-drive-data-by-id'),
    
    path('run-code/python/',code_execute.Execute_Python_Code.as_view(), name='run-python'),
    path('run-code/javascript/',code_execute.Execute_Js_Code.as_view(), name='run-js'),
    path('run-code/java/',code_execute.Execute_Java_Code.as_view(), name='run-java'),
    path('run-code/c/',code_execute.Execute_C_Code.as_view(), name='run-c'),
    path('run-code/cpp/',code_execute.Execute_Cpp_Code.as_view(), name='run-cpp'),
    path('run-code-sql/<int:id>/',code_execute.SQLQueryExecutionView.as_view(), name='run-sql'),
    path('execute-code-sql/<int:id>/',code_execute.SQLQueryExecutionTestCases.as_view(), name='execute-sql'),
    path('execute-code/python/',code_execute.Execute_Python_Test_cases.as_view(), name='execute-python'),
    path('execute-code/javascript/',code_execute.Execute_Js_Test_cases.as_view(),name='execute-js'),
    path('execute-code/java/',code_execute.Execute_Java_Test_Cases.as_view(),name='execute-java'),
    path('execute-code/c/',code_execute.Execute_C_Test_Cases.as_view(),name='execute-c'),
    path('execute-code/cpp/',code_execute.Execute_CPP_Test_Cases.as_view(),name='execute-cpp'),
]
