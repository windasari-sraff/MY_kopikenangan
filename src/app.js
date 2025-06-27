document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000 },
      { id: 2, name: 'Arabica Blend', img: '2.jpg', price: 25000 },
      { id: 3, name: 'Primo Basso', img: '3.jpg', price: 30000 },
      { id: 4, name: 'Aceh Gayo', img: '4.jpg', price: 35000 },
      { id: 5, name: 'Sumatera Mandheling', img: '5.jpg', price: 40000 },
    ],
  }));

  window.rupiah = function(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number);
  };

  Alpine.store('cart', {
    items: [],
    add(item) {
      const found = this.items.find(i => i.id === item.id);
      if (found) {
        found.quantity++;
        found.total = found.quantity * found.price;
      } else {
        this.items.push({
          ...item,
          quantity: 1,
          total: item.price
        });
      }
    },
    increase(item) {
      item.quantity++;
      item.total = item.price * item.quantity;
    },
    decrease(item) {
      if (item.quantity > 1) {
        item.quantity--;
        item.total = item.price * item.quantity;
      }
    },
    get quantity() {
      return this.items.reduce((acc, i) => acc + i.quantity, 0);
    }
  });
});
