const CART_KEY = 'garget_cart';
const WISHLIST_KEY = 'garget_wishlist';
const USER_KEY = 'garget_user';
const ORDERS_KEY = 'garget_orders';
const USERS_KEY = 'garget_users';

const parse = (value, fallback) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const getCart = () => parse(localStorage.getItem(CART_KEY), []);
export const setCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('garget:update'));
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
      quantity
    });
  }
  setCart(cart);
};

export const updateCartQty = (id, quantity) => {
  const cart = getCart().map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
  setCart(cart);
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);
  setCart(cart);
};

export const getWishlist = () => parse(localStorage.getItem(WISHLIST_KEY), []);
export const setWishlist = (wishlist) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  window.dispatchEvent(new Event('garget:update'));
};

export const toggleWishlist = (product) => {
  const wishlist = getWishlist();
  const exists = wishlist.find((item) => item.id === product.id);
  if (exists) {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
    return false;
  }
  setWishlist([
    ...wishlist,
    { id: product.id, name: product.name, price: product.price, priceValue: product.priceValue, image: product.image }
  ]);
  return true;
};

export const getUser = () => parse(localStorage.getItem(USER_KEY), null);
export const setUser = (user) => {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
  window.dispatchEvent(new Event('garget:update'));
};

export const getOrders = () => parse(localStorage.getItem(ORDERS_KEY), []);
export const setOrders = (orders) => {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  window.dispatchEvent(new Event('garget:update'));
};

export const checkoutCart = () => {
  const user = getUser();
  if (!user) return { success: false, message: 'Please login first.' };

  const cart = getCart();
  if (!cart.length) return { success: false, message: 'Your cart is empty.' };

  const orders = getOrders();
  const total = cart.reduce((sum, item) => sum + item.priceValue * item.quantity, 0);
  orders.unshift({
    id: Date.now(),
    date: new Date().toISOString(),
    status: 'Processing',
    items: cart,
    total
  });
  setOrders(orders);
  setCart([]);
  return { success: true, message: 'Order placed successfully.' };
};

export const getUsers = () => parse(localStorage.getItem(USERS_KEY), []);
export const setUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  window.dispatchEvent(new Event('garget:update'));
};

export const findUserByIdentifier = (identifier) => {
  const users = getUsers();
  const value = (identifier || '').trim().toLowerCase();
  if (!value) return null;
  return (
    users.find((u) => (u.email || '').trim().toLowerCase() === value) ||
    users.find((u) => (u.phone || '').trim().toLowerCase() === value) ||
    null
  );
};

export const createUser = ({ name, phone, email, gender, password }) => {
  const users = getUsers();
  const normalizedEmail = (email || '').trim().toLowerCase();
  const normalizedPhone = (phone || '').trim().toLowerCase();

  const exists = users.some(
    (u) =>
      (u.email || '').trim().toLowerCase() === normalizedEmail ||
      (u.phone || '').trim().toLowerCase() === normalizedPhone
  );
  if (exists) return { success: false, message: 'User already exists.' };

  const user = {
    id: Date.now(),
    name: name || '',
    phone: phone || '',
    email: email || '',
    gender: gender || '',
    joinedAt: new Date().toISOString(),
    password: password || ''
  };

  setUsers([user, ...users]);
  // Do not expose password in the currently logged-in user.
  const { password: _p, ...publicUser } = user;
  setUser(publicUser);
  return { success: true, user: publicUser };
};

export const loginUser = ({ identifier, password }) => {
  const user = findUserByIdentifier(identifier);
  if (!user) return { success: false, message: 'User not found.' };
  if ((user.password || '') !== (password || '')) return { success: false, message: 'Invalid credentials.' };

  // Do not expose password on UI.
  const { password: _p, ...publicUser } = user;
  setUser(publicUser);
  return { success: true, user: publicUser };
};

export const loginWithGoogle = () => {
  // Demo-only: fixed google user.
  const googleEmail = 'google.user@example.com';
  const googleIdentifier = googleEmail;
  const users = getUsers();

  let user = findUserByIdentifier(googleIdentifier);
  if (!user) {
    const created = createUser({
      name: 'Google User',
      phone: '',
      email: googleEmail,
      gender: 'Other',
      password: 'google'
    });
    if (created.success) return { success: true, user: created.user };
    return { success: false, message: created.message };
  }

  const { password: _p, ...publicUser } = user;
  setUser(publicUser);
  return { success: true, user: publicUser };
};
