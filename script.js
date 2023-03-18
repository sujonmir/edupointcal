let switch1 = document.getElementById('switch1')
let EighthPointPolishInput = document.getElementById('EighthPointPolishInput')
let EighthPointPolishInputValue = 0
let EighthPointPolish = document.getElementById('EighthPointPolish')
let switch2 = document.getElementById('switch2')
let EighthPointMathInput = document.getElementById('EighthPointMathInput')
let EighthPointMathInputValue = 0
let EighthPointMath = document.getElementById('EighthPointMath')
let switch3 = document.getElementById('switch3')
let EighthPointForeignInput = document.getElementById('EighthPointForeignInput')
let EighthPointForeignInputValue = 0
let EighthPointForeign = document.getElementById('EighthPointForeign')
let primaryPointPolishInput = document.getElementById('primaryPointPolishInput')
let primaryPointPolish = document.getElementById('primaryPointPolish')
let primaryPointMathInput = document.getElementById('primaryPointMathInput')
let primaryPointMath = document.getElementById('primaryPointMath')
let primarySub3 = document.getElementById('primarySub3')
let primarySub3Rating = document.getElementById('primarySub3Rating')
let primaryPointSub3 = document.getElementById('primaryPointSub3')
let primarySub4 = document.getElementById('primarySub4')
let primarySub4Rating = document.getElementById('primarySub4Rating')
let primaryPointSub4 = document.getElementById('primaryPointSub4')
let certificateYes = document.getElementById('certificateYes')
let certificateNo = document.getElementById('certificateNo')
let certificatePoint = document.getElementById('certificatePoint')
let volunteeringYes = document.getElementById('volunteeringYes')
let volunteeringNo = document.getElementById('volunteeringNo')
let volunteeringPoint = document.getElementById('volunteeringPoint')
let contestsYes = document.getElementById('contestsYes')
let contestsNo = document.getElementById('contestsNo')
let contestsPoint = document.getElementById('contestsPoint')
let quizes = document.getElementById('quizes')
let quiz1 = document.getElementById('quiz1')
let Q1NO = document.getElementById('Q1NO')
let Q2NO = document.getElementById('Q2NO')
let Q3NO = document.getElementById('Q3NO')
let Q4NO = document.getElementById('Q4NO')
let Q5NO = document.getElementById('Q5NO')
let Q1A1 = document.getElementById('Q1A1')
let Q1A2 = document.getElementById('Q1A2')
let Q1A3 = document.getElementById('Q1A3')
let quiz2 = document.getElementById('quiz2')
let Q2A1 = document.getElementById('Q2A1')
let Q2A2 = document.getElementById('Q2A2')
let Q2A3 = document.getElementById('Q2A3')
let quiz3 = document.getElementById('quiz3')
let Q3A1 = document.getElementById('Q3A1')
let Q3A2 = document.getElementById('Q3A2')
let Q3A3 = document.getElementById('Q3A3')
let Q3A4 = document.getElementById('Q3A4')
let Q3A5 = document.getElementById('Q3A5')
let Q3A6 = document.getElementById('Q3A6')
let quiz4 = document.getElementById('quiz4')
let Q4A1 = document.getElementById('Q4A1')
let Q4A2 = document.getElementById('Q4A2')
let Q4A3 = document.getElementById('Q4A3')
let Q4A4 = document.getElementById('Q4A4')
let Q4A5 = document.getElementById('Q4A5')
let Q4A6 = document.getElementById('Q4A6')
let quiz5 = document.getElementById('quiz5')
let Q5A1 = document.getElementById('Q5A1')
let Q5A2 = document.getElementById('Q5A2')
let Q5A3 = document.getElementById('Q5A3')
let Q5A4 = document.getElementById('Q5A4')
let result = document.getElementById('result')
let totalpoints = 0
let a = 0
let b = 0
let c = 0
let d = 0
let e = 0
let cp = 0

if (primarySub3.value == 'choose') {
    primarySub3Rating.setAttribute('disabled', '')
}
if (primarySub4.value == 'choose') {
    primarySub4Rating.setAttribute('disabled', '')
}

window.addEventListener('change', function() {

    // eightth grade polish start
    EighthPointPolishInput.setAttribute('placeholder', 'Enter result %')
    if (EighthPointPolishInput.value > 100) {
        EighthPointPolishInput.value = 100
    }
    EighthPointPolishInputValue = Math.round(Number(EighthPointPolishInput.value) * 0.35)
    EighthPointPolish.innerText = EighthPointPolishInputValue
    if (switch1.checked) {
        EighthPointPolishInput.setAttribute('placeholder', 'Enter The rating')
        if (EighthPointPolishInput.value > 6) {
            EighthPointPolishInput.value = 6
        }
        if (EighthPointPolishInput.value == 1) {
            EighthPointPolish.innerText = 0
        } else if (EighthPointPolishInput.value == 2) {
            EighthPointPolish.innerText = 10
        } else if (EighthPointPolishInput.value == 3) {
            EighthPointPolish.innerText = 15
        } else if (EighthPointPolishInput.value == 4) {
            EighthPointPolish.innerText = 25
        } else if (EighthPointPolishInput.value == 5) {
            EighthPointPolish.innerText = 30
        } else if (EighthPointPolishInput.value == 6) {
            EighthPointPolish.innerText = 35
        } else {
            EighthPointPolish.innerText = 0
        }
    }
    // eightth grade polish end

    // eightth grade Mathematics start
    EighthPointMathInput.setAttribute('placeholder', 'Enter result %')
    if (EighthPointMathInput.value > 100) {
        EighthPointMathInput.value = 100
    }
    EighthPointMathInputValue = Math.round(Number(EighthPointMathInput.value) * 0.35)
    EighthPointMath.innerText = EighthPointMathInputValue
    if (switch2.checked) {
    	EighthPointMathInput.setAttribute('placeholder', 'Enter The rating')
        if (EighthPointMathInput.value > 6) {
            EighthPointMathInput.value = 6
        }
        if (EighthPointMathInput.value == 1) {
            EighthPointMath.innerText = 0
        } else if (EighthPointMathInput.value == 2) {
            EighthPointMath.innerText = 10
        } else if (EighthPointMathInput.value == 3) {
            EighthPointMath.innerText = 15
        } else if (EighthPointMathInput.value == 4) {
            EighthPointMath.innerText = 25
        } else if (EighthPointMathInput.value == 5) {
            EighthPointMath.innerText = 30
        } else if (EighthPointMathInput.value == 6) {
            EighthPointMath.innerText = 35
        } else {
            EighthPointMath.innerText = 0
        }
    }
    // eightth grade Mathematics end

    // eightth grade j. modern foreign start
    EighthPointForeignInput.setAttribute('placeholder', 'Enter result %')
    if (EighthPointForeignInput.value > 100) {
        EighthPointForeignInput.value = 100
    }
    EighthPointForeignInputValue = Math.round(Number(EighthPointForeignInput.value) * 0.30)
    EighthPointForeign.innerText = EighthPointForeignInputValue
    if (switch3.checked) {
    	EighthPointForeignInput.setAttribute('placeholder', 'Enter The rating')
        if (EighthPointForeignInput.value > 6) {
            EighthPointForeignInput.value = 6
        }
        if (EighthPointForeignInput.value == 1) {
            EighthPointForeign.innerText = 0
        } else if (EighthPointForeignInput.value == 2) {
            EighthPointForeign.innerText = 5
        } else if (EighthPointForeignInput.value == 3) {
            EighthPointForeign.innerText = 10
        } else if (EighthPointForeignInput.value == 4) {
            EighthPointForeign.innerText = 20
        } else if (EighthPointForeignInput.value == 5) {
            EighthPointForeign.innerText = 25
        } else if (EighthPointForeignInput.value == 6) {
            EighthPointForeign.innerText = 30
        } else {
            EighthPointForeign.innerText = 0
        }
    }
    // eightth grade j. modern foreign end

    // Primary school leaving certificate Polish start
    primaryInput(primaryPointPolishInput, primaryPointPolish)
    // Primary school leaving certificate Polish end

    // Primary school leaving certificate Mathmatics start
    primaryInput(primaryPointMathInput, primaryPointMath)
    // Primary school leaving certificate Mathmatics end

    // Primary school leaving certificate primarySub 3 and 4 start
    if (primarySub3.value == primarySub4.value && primarySub4.value != 'choose') {
        alert(`3rd and 4th subject can't be same`)
        primarySub3.value = 'choose'
        primarySub4.value = 'choose'
        primarySub3Rating.setAttribute('disabled', '')
        primarySub4Rating.setAttribute('disabled', '')
        primaryPointSub3.innerText = 0
        primaryPointSub4.innerText = 0
    }
    if (primarySub3.value != 'choose') {
        primarySub3Rating.removeAttribute('disabled')
    }
    primaryInput(primarySub3Rating, primaryPointSub3)
    if (primarySub4.value != 'choose') {
        primarySub4Rating.removeAttribute('disabled')
    }
    primaryInput(primarySub4Rating, primaryPointSub4)

    // Primary school leaving certificate primarySub 3 and 4 end

    // Certificate with distinction start
    if (certificateYes.checked) {
        certificatePoint.innerText = 7
    }
    if (certificateNo.checked) {
        certificatePoint.innerText = 0
    }
    // Certificate with distinction end

    // Volunteering start
    if (volunteeringYes.checked) {
        volunteeringPoint.innerText = 3
    }
    if (volunteeringNo.checked) {
        volunteeringPoint.innerText = 0
    }
    // Volunteering end

    // Contests start


    if (contestsYes.checked) {
        quizes.style.display = 'block'
    }
    if (Q1NO.checked) {
        a = 0
    }
    if (Q2NO.checked) {
        b = 0
    }
    if (Q3NO.checked) {
        c = 0
    }
    if (Q4NO.checked) {
        d = 0
    }
    if (Q5NO.checked) {
        e = 0
    }

    if (Q1A1.checked) {
        a = 10
    }
    if (Q1A2.checked) {
        a = 7
    }
    if (Q1A3.checked) {
        a = 5
    }
    if (Q2A1.checked) {
        b = 10
    }
    if (Q2A2.checked) {
        b = 4
    }
    if (Q2A3.checked) {
        b = 3
    }
    if (Q3A1.checked) {
        c = 10
    }
    if (Q3A2.checked) {
        c = 7
    }
    if (Q3A3.checked) {
        c = 5
    }
    if (Q3A4.checked) {
        c = 7
    }
    if (Q3A5.checked) {
        c = 5
    }
    if (Q3A6.checked) {
        c = 3
    }
    if (Q4A1.checked) {
        d = 10
    }
    if (Q4A2.checked) {
        d = 7
    }
    if (Q4A3.checked) {
        d = 5
    }
    if (Q4A4.checked) {
        d = 7
    }
    if (Q4A5.checked) {
        d = 3
    }
    if (Q4A6.checked) {
        d = 2
    }
    if (Q5A1.checked) {
        e = 4
    }
    if (Q5A2.checked) {
        e = 3
    }
    if (Q5A3.checked) {
        e = 2
    }
    if (Q5A4.checked) {
        e = 1
    }
    cp = a + b + c + d + e
    if (cp > 18) {
        cp = 18
    }
    contestsPoint.innerText = cp


    if (contestsNo.checked) {
        quizes.style.display = 'none'
        cp = 0
        contestsPoint.innerText = cp
    }
    // Contests end

})

function primaryInput(rating, point) {
    if (rating.value > 6) {
        rating.value = 6
    }
    if (rating.value == 1) {
        point.innerText = 0
    } else if (rating.value == 2) {
        point.innerText = 2
    } else if (rating.value == 3) {
        point.innerText = 8
    } else if (rating.value == 4) {
        point.innerText = 14
    } else if (rating.value == 5) {
        point.innerText = 17
    } else if (rating.value == 6) {
        point.innerText = 18
    } else {
        point.innerText = 0
    }
}


let p = [...document.querySelectorAll('.point')]

setInterval(function() {
    totalpoints = Number(p[0].innerText) + Number(p[1].innerText) + Number(p[2].innerText) + Number(p[3].innerText) + Number(p[4].innerText) + Number(p[5].innerText) + Number(p[6].innerText) + Number(p[7].innerText) + Number(p[8].innerText) + Number(p[9].innerText)
    result.innerText = totalpoints
}, 1);