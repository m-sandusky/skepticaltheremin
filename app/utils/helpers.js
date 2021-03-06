
var getAllBreadCrumbs = function(username, cb) {
  console.log(username);
  $.ajax({
    url: '/api/maps/' + username,
    type: 'GET',
    success: function(data) {
      // this.setState({data: data});
      console.log(data);
      return cb(data);
    },
    error: function(xhr, status, err) {
      console.log(status, err.toString());
    }
  });
};

var getUserID = function(callback) {
  $.ajax({
    url: '/userid',
    type: 'GET',
    success: function(data) {
      callback(data);
    },
    error: function(xhr, status,err) {
      console.log(status,err.toString());
    }
  });
  // callback(); //for testing purposes
};

var createNewStory = function(storyName, userID, callback) {
  console.log(storyName);
  var storyData = {userid: userID, storyName: storyName};
  $.ajax({
    url: '/api/story',
    type: 'POST',
    data: storyData,
    success: function(data) {
      callback(data);
    },
    error: function(xhr, status, err) {
      console.log('error creating story');
    }
  });
  // callback({id: 2, name:'Hi'});
};

var getSingleStory = function(storyID, callback) {
  $.ajax({
    url: '/api/story/' + storyID,
    type: 'GET',
    success: function(data) {
      callback(data);
    },
    error: function(xhr, status, err) {
      console.log(status, err.toString());
    }
  });
};

var getAllStories = function(userID, callback) {
  $.ajax({
    url: '/api/story/allstories/' + userID,
    type: 'GET',
    success: function(response) {
      console.log(response);
      callback(response);
    },
    error: function(xhr, status, err) {
      console.log(status, err.toString());
    }
  });
};


// Sends a story List to the client
var sendStory = function(username, storyList, cb){

  console.log('HELPER',storyList);
  // $.ajax({
  //     url: 'to/be/decided',
  //     dataType: 'json',
  //     type:'PUT',
  //     data: storyList,
  //     success: function(response){

  //     },
  //     error: function(xhr, status, err) {
  //       console.log(status, err.toString());
  //     }
  // })
};

var addPin = function(pindata, storyID, callback){
  console.log('about to ajax', storyID);
  $.ajax({
    url: '/api/pin/' + storyID,
    type: "POST",
    data: pindata,
    success: function(response){
      callback(response);
      console.log('added pin to db');
    },
    error: function(xhr, status, err) {
      console.log('failed adding pin');
    }
  });


};

var deletePinRequest = function(id, cb){
  // console.log('HELPER delete Pin', id);
  // $.ajax({
  //   url:`/api/pin/${id}`,
  //   type:'DELETE',
  //   success:function(response){
  //     console.log(response);
  //   },
  //   error: function(xhr, status, err) {
  //     console.log(status, err.toString());
  //   }
  // })
};

var addBreadCrumb = function(username, breadcrumb, cb) {
  console.log(username);
  $.ajax({
    url: '/api/maps/' + username,
    dataType: 'json',
    type: 'PUT',
    data: breadcrumb,
    success: function(data) {
      // this.setState({data: data});
      console.log(data);
      return cb(data);
    },
    error: function(xhr, status, err) {
      console.log(status, err.toString());
    }
  });
};

var signupUser = function(username, password, cb){
  console.log(username,password);
  var user = {
    username: username,
    password: password
  };
  $.ajax({
    url: '/api/users',
    type: 'POST',
    data: user,
    dataType: 'json',
    success: function(data){
      window.location.href = "#map";
      if(cb){
        cb(data);
      }
    },
    error: function(xhr, status, err) {
      console.log("err");
      console.log(xhr.toString(), status.toString(), err.toString());
      // console.log(status, err.toString());
    }

  });
};

var login = function(username, password, cb){
  console.log(username,password);
  var user = {
    username: username,
    password: password
  };
  $.ajax({
    url: '/api/users', //This needs to be a different route for login. not yet implemented
    type: 'POST',
    data: user,
    dataType: 'json',
    success: function(data){
      window.location.href = "#map";
      if(cb){
        cb(data);
      }
    },
    error: function(xhr, status, err) {
      console.log("err");
      console.log(xhr.toString(), status.toString(), err.toString());
      // console.log(status, err.toString());
    }

  });
};

var helpers = {
  getAllBreadCrumbs: getAllBreadCrumbs,
  addBreadCrumb: addBreadCrumb,
  signupUser: signupUser,
  login: login,
  sendStory: sendStory,
  addPin: addPin,
  getAllStories: getAllStories,
  getSingleStory: getSingleStory,
  createNewStory: createNewStory,
  getUserID: getUserID

}

module.exports = helpers;
