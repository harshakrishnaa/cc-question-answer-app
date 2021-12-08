var global = (function() {
  var full_name = "";
  var gender = "";
  var age=0;
  var language="";
  var qtn_1_ans="";
  var qtn_2_ans=[false,false,false,false];
  var qtn_3_ans="";
  var qtn_4_ans="";
  var qtn_5_ans="";
  var result;

  var getName = function() {
    return full_name;    
  };

  var setName = function(name) {
    full_name = name;     
  };


  var getGender = function() {
    return gender;    
  };

  var setGender = function(gender1) {
    gender = gender1;     
  };


  var getAge = function() {
    return age;    
  };

  var setAge = function(age1) {
    age = age1;   
  };

  var getLanguage = function() {
    return language;    
  };

  var setLanguage = function(language1) {
    language = language1;     
  };


  var getQtn_1_ans = function() {
    return qtn_1_ans;    
  };

  var setQtn_1_ans = function(qtn_1_ans1) {
    qtn_1_ans = qtn_1_ans1;   
  };


var getQtn_2_ans = function() {
    return qtn_2_ans;    
  };

  var setQtn_2_ans = function(qtn_2_ans1,pos) {
    qtn_2_ans[pos] = qtn_2_ans1;   
  };


  var getQtn_3_ans = function() {
    return qtn_3_ans;    
  };

  var setQtn_3_ans = function(qtn_3_ans1) {
    qtn_3_ans = qtn_3_ans1;   
  };


var getQtn_4_ans = function() {
    return qtn_4_ans;    
  };

  var setQtn_4_ans = function(qtn_4_ans1) {
    qtn_4_ans = qtn_4_ans1;   
  };

  var getQtn_5_ans = function() {
    return qtn_5_ans;    
  };

  var setQtn_5_ans = function(qtn_5_ans1) {
    qtn_5_ans = qtn_5_ans1;   
  };


  var getResult = function() {
    return result;    
  };

  var setResult = function(result1) {
    result = result1;   
  };

  return {
    getName: getName,
    setName: setName,
    getGender: getGender,
    setGender: setGender,
    getAge: getAge,
    setAge: setAge,
    getLanguage: getLanguage,
    setLanguage: setLanguage,
    getQtn_1_ans: getQtn_1_ans,
    setQtn_1_ans: setQtn_1_ans,
    getQtn_2_ans: getQtn_2_ans,
    setQtn_2_ans: setQtn_2_ans,
    getQtn_3_ans: getQtn_3_ans,
    setQtn_3_ans: setQtn_3_ans,
    getQtn_4_ans: getQtn_4_ans,
    setQtn_4_ans: setQtn_4_ans,
    getQtn_5_ans: getQtn_5_ans,
    setQtn_5_ans: setQtn_5_ans,
    getResult: getResult,
    setResult: setResult

  }

})();

export default global;