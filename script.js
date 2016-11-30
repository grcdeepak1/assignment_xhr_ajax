
var $ = {
  ajax: function(options) {
    var xhr = new XMLHttpRequest();

    var method   = options.method   || "GET";
    var url      = options.url      || "http://reqres.in/api/users?page=2"
    var data     = options.data     || {} ;
    var async    = options.async    || true;
    var headers  = options.headers  || {};
    var success  = options.success  || function() {};
    var complete = options.complete || function() {};
    var error    = options.error    || function() {};

    // xhr.responseType = options.dataType || "";

    xhr.onload = function() {
      success(xhr.responseText);
      complete(xhr, xhr.status);
    };
    xhr.onerror = function() {
      error(xhr, xhr.status, xhr.statusText);
      complete(xhr, xhr.status);
    }

    xhr.open(method, url, async);
    xhr.send(data);
  }
};

$.get = function(url, data, success) {
  $.ajax({
    method: "GET",
    url: url,
    data: data,
    success: success,
  })
}

$.post = function(url, data, success) {
  $.ajax({
    method: "POST",
    url: url,
    data: data,
    success: success,
  })
}

//1. Get Example
$.ajax( {
  success: function(responseText) {
    console.log("1. Get Example : success :" + responseText);
  },
  complete: function(xhr, status) {
    console.log("1. Get Example : complete :" + xhr + ":" + status);
  },
  error: function(xhr, status, errorThrown) {
    console.log("error :", xhr, ":" + status + ":"  + errorThrown);
  }
})

//2. Post Example
$.ajax( {
  method: "POST",
  data: {
    article: {
      title: 'Bar'
    }
  },
  url: "http://reqres.in/api/users/",

  success: function(responseText) {
    console.log("2. Post Example : success :"  + responseText);
  },
  complete: function(xhr, status) {
    console.log("2. Post Example : complete :" + xhr + ":" + status);
  },
  error: function(xhr, status, errorThrown) {
    console.log("error :", xhr, ":" + status + ":"  + errorThrown);
  }
})

// 3. Get helper example
$.get("http://reqres.in/api/users?page=2", "", function(responseText) {
        console.log("3. Get helper example : success :" + responseText);
      });

// 4. Post helper example
$.post("http://reqres.in/api/users/", "", function(responseText) {
  console.log("4. Post helper example : success :" + responseText);
});


