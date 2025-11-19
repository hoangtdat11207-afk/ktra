// Data lưu trữ sản phẩm trong giỏ hàng
let cartItems = [
    {
        id: 1,
        name: "Bát ăn",
        price: 150000,
        quantity: 1,
        image: "https://via.placeholder.com/80x80/cccccc/666666?text=Bát+ăn"
    },
    {
        id: 2,
        name: "Áo thần tài",
        price: 300000,
        quantity: 1,
        image: "https://via.placeholder.com/80x80/cccccc/666666?text=Áo+thần+tài"
    }
];

// Hàm thay đổi số lượng
function changeQuantity(index, change) {
    const quantityInput = document.querySelectorAll('.quantity-input')[index];
    let newQuantity = parseInt(quantityInput.value) + change;
    
    if (newQuantity < 1) {
        newQuantity = 1;
    }
    
    quantityInput.value = newQuantity;
    cartItems[index].quantity = newQuantity;
}

// Hàm cập nhật số lượng từ input
function updateQuantity(index, value) {
    let quantity = parseInt(value);
    
    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
    }
    
    document.querySelectorAll('.quantity-input')[index].value = quantity;
    cartItems[index].quantity = quantity;
}

// Hàm xóa sản phẩm
function removeItem(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        const row = document.querySelectorAll('tbody tr')[index];
        row.remove();
        
        // Cập nhật lại STT
        const rows = document.querySelectorAll('tbody tr');
        rows.forEach((row, idx) => {
            row.querySelector('td:first-child').textContent = idx + 1;
        });
        
        cartItems.splice(index, 1);
        
        // Nếu không còn sản phẩm nào, thông báo
        if (cartItems.length === 0) {
            const tbody = document.querySelector('tbody');
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px;">Giỏ hàng của bạn đang trống</td></tr>';
        }
    }
}

// Hàm thanh toán
function checkout() {
    if (cartItems.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
        return;
    }
    
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formattedTotal = total.toLocaleString('vi-VN') + '₫';
    
    alert(`Tổng tiền cần thanh toán: ${formattedTotal}\n\nCảm ơn bạn đã mua sắm!`);
}

