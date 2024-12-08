import CartItem from "../components/card";
import Navbar from "../components/Navbar";
import Email from "../components/Email";
import Footer from "../components/Foot";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="container mx-auto p-4">
            <Navbar />
      <nav className="text-gray-600 text-sm mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt;{" "}
        <a href="#" className="hover:underline">
          Cart
        </a>
      </nav>
      <h1 className="text-4xl font-bold mb-6">YOUR CART</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <CartItem
            image="https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdXM50mhn6bTCgy5ZIKXsA-QjkRV4OaWX-Cnze9In8KoiidKM66~GMFQpGbd092AChJXdOH87aE7q6hd4B1aki0Zz21BapPXWfD-ZAzl0lGNR~NulEIkdSnE0jX-oJqDrfSsv-jSbNtcdHYlXxSvFTZm-AB00loKN8T-Mhiy9cl866BvdooVFZzcYdQ~1RiMRLltq2fST3WpaC9SBLc~x-TGafP45Zx4drobNz~D3j59Pp9iOCBHkQ9haqy425Ct361dCDYxZr626Le81QLSCBQRdkwfU1Z2aniwh1PeZn~oL6HzotM1wzQDPrdZkY~jkuEs62dpjO-DdRcUCOah6Q__"
            title="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="$145"
          />
          <CartItem
            image="https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j2zRJvvq9tM5IRPO74vJiPhtF6BOd5s0Ee3Tjh2MTz0N3-TFTRXDwXN2BbT8QXDf9mZeNYmStRD8tz5FJucFT-FSQfEPxGc09FJQRoLwRCGaFBB1LeLgUJVcrIRfZ3VH11QygxPv~Ihy~NAsplH7zOS7ctbN0F-YOTi7PiYM20RW6Z0dxEvMb-hX3fLiU0rCrASgKvYJ4jo~HYur0O4HfeQZJWCIwep~Rhjuq92NffqcGAZZl30rb-gFn5SQXQSMUfBQSvgeG3UFOrdQrHBX8ADmEB8Fw47vMdZzNmqd1UavVZ7htorOdB4SsccWqo2fc~DXzlAOqpsTMfYf9FIOJw__"
            title="Checkered Shirt"
            size="Medium"
            color="Red"
            price="$180"
          />
          <CartItem
            image="https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gqcLL5UmMTnyPt9DvALODCglbRkma8WTB8Wb2rSdpGwQgz1oRRxOHRn2a62WzfL6OZj-qqVtbbo3w~4L5zhulyuteZnnG~A0KlNk-SdSHYnPBDaU877kleeDQY2W7rKbK-bTuxi1wKKOYGtYGvBWQyKCkL8UcarLoe2mdZoDGeqx5W~EwlPeCPHh2cb9R9KHpZ2eSBRZQVI1t8fjGnT~s6G2QtgQM6U3KibhoZkasMAQDjX8PavjtMny7hsBRTGanVyprSXELRnwaPDwFBxNcc8y2tZ~IEm9ljqsr1wSaYyv2xxtIpCvpe~NEBbZ1w1Yt2sMM02fqNHbYyWuwlGIyA__"
            title="Skinny Fit Jeans"
            size="Large"
            color="Blue"
            price="$240"
          />
        </div>
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>$565</span>
          </div>
          <div className="flex justify-between mb-2 text-red-500">
            <span>Discount (-20%)</span>
            <span>-$113</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>$15</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-4 text-xl font-bold">
            <span>Total</span>
            <span>$467</span>
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 p-2 border rounded-l-lg"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg">
              Apply
            </button>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg">
            Go to Checkout &rarr;
          </button>
        </div>
      </div>
      <br />
      <Email />
      <br />
      <Footer />
    </div>
  );
};

export default CartPage;
