var arrOfObj = [
    {
        p_id : '01',
        p_name : 'Samsung1',
        p_price : '45000',
        p_image : 'https://th.bing.com/th/id/OIP.ubfY0Q76TqHaw3Acda5_oAHaFj?w=243&h=182&c=7&r=0&o=5&pid=1.7'
    } 
]

// document.write(arrOfObj[0].p_id)
var getImage = document.getElementById('img')
getImage.setAttribute('class','imgClass')
getImage.src = arrOfObj[0].p_image
