var storage = window.localStorage
var baselink = "https://twitter.com/i/notifications/anniversary?title=Title&message=Description&action=Button&text=Tweet&image_attachment=Link"
var sharelink = "https://twitter.com/compose/tweet?text="
if (storage.getItem('started')=='true') {
    document.getElementById('1').hidden = true
    document.getElementById('2').hidden = false
}

function go() {
    storage.setItem('started', 'true')
    document.getElementById('1').hidden = true
    document.getElementById('2').hidden = false
}
function generate() {
    title = document.getElementById("title")
    message = document.getElementById("message")
    previmg = document.getElementById("previmg")
    buttontxt = document.getElementById("buttontxt")

    twttxt = document.getElementById("twttxt")
    
    newlink = baselink.replace('Title',encodeURIComponent(title.value))
    newlink = newlink.replace('Description',encodeURIComponent(message.value))
    newlink = newlink.replace('Button',encodeURIComponent(buttontxt.value))
    newlink = newlink.replace('Link',encodeURIComponent(previmg.value))
    newlink = newlink.replace('Tweet',encodeURIComponent(twttxt.value))
    newlink = `${sharelink}${encodeURIComponent(newlink)}`
    document.getElementById("2").hidden = true
    document.getElementById("3").hidden = false
}