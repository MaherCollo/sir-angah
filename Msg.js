// aتعريف دالة لعرض رسالة
function showMessage() {
    alert("مرحبًا! هذه رسالة تجريبية.");
}

//a استدعاء الدالة لعرض الرسالة عند تحميل الصفحة
window.onload = function() {
    showMessage();
};
