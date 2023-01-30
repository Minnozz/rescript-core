// Generated by ReScript, PLEASE EDIT WITH CARE


function encodeUndefined(_key, value) {
  if (value === undefined) {
    return {
            __rescript_private_none: true
          };
  } else {
    return value;
  }
}

function serializeExn(x) {
  return JSON.stringify(x, encodeUndefined);
}

function deserializeUnsafe(x) {
  var undefinedValues = [];
  var value = JSON.parse(x, (function (key, value) {
          var $$this = this ;
          if (!(value == null) && value.__rescript_private_none) {
            undefinedValues.push([
                  $$this,
                  key
                ]);
          }
          return value;
        }));
  undefinedValues.forEach(function (param) {
        param[0][param[1]] = undefined;
      });
  return value;
}

export {
  encodeUndefined ,
  serializeExn ,
  deserializeUnsafe ,
}
/* No side effect */
