function solution(date1, date2) {
//    const year1 = date1[0]
//    const year2 = date2[0]
//    const month1 = date1[1]
//    const month2 = date2[1]
//    const day1 = date1[2]
//    const day2 = date2[2]
   
//    const newDate1 = new Date(year1, month1, day1)
//    const newDate2 = new Date(year2, month2, day2)
    
    // 리팩토링
   return new Date(date1) < new Date(date2) ? 1 : 0
}