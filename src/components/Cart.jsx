import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCloseCart, selectCartState, selectCartItems, setClearCartItems, selectTotalAmount, setGetTotals, selectTotalQTY } from '../app/CartSlice';
import CartCount from './cart/CartCount';
import CartEmpty from './cart/CartEmpty';
import CartItem from './cart/CartItem';

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState);
    const cartItems = useSelector(selectCartItems); 
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);

    useEffect(() => {
        dispatch(setGetTotals())
    }, [cartItems, dispatch])

    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false,
        }));
    }

    const onClearCartItems = () => {
        dispatch(setClearCartItems())
    };

  return (
    <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[250] opacity-100 ${ifCartState ? 'opacity-100 translate-x-0 visible' : 'opacity-0 invisible translate-x-8'}`}>
            <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
                {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div className=''>
                    <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden py-3'>
                        {cartItems?.map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </div>

                    <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
                            <h1 className='bg-theme-cart px-1 py-0.5 rounded text-slate-100 text-sm'>${totalAmount}</h1>
                        </div>
                        <div className='grid items-center gap-2'>
                            <p className='text-sm font-medium text-center'>Taxes and Shipping will Calculate At Shipping</p>
                            <button type='button' className='buttom-theme bg-theme-cart text-white'>Check Out</button>
                        </div>
                    </div>
                </div>
                }

            </div>
        </div>
    </>
  )
}

export default Cart;