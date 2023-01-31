// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(x="go to the office") {
    return "This Monday, I will " + x + "."
}

function wrapAdjective(string = "*") {
    return function (words = "special") {
        return "You are " + string + words + string + "!"
        }
    }


wrapAdjective("%")("a dedicated programmer")