function shareOnWhatApp() {
    var currentURL = window.location.href;
    const element = document.createElement('textarea');
    element.value = currentURL;
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    confirm("Navigating to Whatsapp Web");
    document.body.removeChild(element);
}