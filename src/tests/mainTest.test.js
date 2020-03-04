import signUpTest from './user.test';
import userLoginTest from './userLogin.test';
import allRequestTest from './request.test';
import userProfileInformation from './getUserAnEditProfileInfo.test';
import twoWayTrip from './twoWayTrip.test';
import rejectRequest from './rejectRequest.test';
import socialLogin from './socialLogin.test';
import muliltiRequest from './multicityRequest.test';
import routeExistance from './app.test';

routeExistance();
signUpTest();
userLoginTest();
userProfileInformation();
twoWayTrip();
muliltiRequest();
allRequestTest();
rejectRequest();
socialLogin();
