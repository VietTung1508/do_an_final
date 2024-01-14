import {Link} from "react-router-dom";

export default function HCard({ key, card }) {
  return (
      <Link to={`/product/${card._id}`} className={'link rounded-2xl'}>
          <div className="h-[550px] w-[320px] hover:scale-105 transition-transform" key={key}>
              <div className="relative rounded-xl overflow-hidden">
                  <img src={card?.image?.url} alt="fund1"/>
                  {Number(card?.price_sale) > 0 ? (
                      <>
                          <div
                              className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[13px] text-center">
                              {Math.floor(Number((card.price - card.price_sale) / card.price * 100))}% off
                          </div>
                      </>
                  ) : (
                      <>
                      </>
                  )}
              </div>
              <div className="flex items-center gap-4 my-4 px-2 ">
                  {Number(card?.price_sale) > 0 ? (
                      <>
                          <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[15px] font-medium line-through">
                              {card?.price?.toLocaleString()} VND
                          </h1>
                          <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[15px] font-medium">
                              {card?.price_sale?.toLocaleString()} VND
                          </h1>
                      </>
                  ) : (
                      <>
                          <h1 className="bg-[#5c807162] px-3 py-1 rounded-md text-[#6D9886] text-[15px] font-medium">
                              {card?.price?.toLocaleString()} VND
                          </h1>
                          <h1 className=" px-3 py-1 text-[#6D9886] text-[15px] font-medium">

                          </h1>
                      </>
                  )}

                  <p className="text-xs font-bold text-[#6D9886]">
                      <i className="fa fa-clock text-xs text-[14px]"/> {card.date}
                  </p>
                  <i className="fa fa-heart text-xs text-[#6D9886] text-[14px] ml-auto"/>
              </div>
              <h2 className="font-bold text-[17px] px-2 hover:text-[#6D9886] transition-colors cursor-pointer">
                  {card.title}
              </h2>
          </div>
      </Link>

  );
}
