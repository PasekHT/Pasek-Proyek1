
import { useState, useRef, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import {
  FaShare,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaLink,
} from "react-icons/fa";


function Home() {
  const [likes, setLikes] = useState(0); // jumlah like awal
  const [liked, setLiked] = useState(false); // status apakah sudah like
  const [isOpen, setIsOpen] = useState(false); // status apakah modal terbuka
  const openModal = () => setIsOpen(true) // membuka modal
  const closeModal = () => setIsOpen(false); // menutup modal
  const [comment, setComment] = useState(""); // komentar
  const [comments, setComments] = useState([]); // daftar komentar
  const images = [
    "https://img.jakpost.net/c/2021/01/28/2021_01_28_110186_1611839056._large.jpg", // landscape
    "https://i.scdn.co/image/ab6761610000e5eb1b60759fc037d4155431e541", // portrait
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsCETpNsXX35A-YSQBx9Ynxi43Iwcgh8ysQ&s", // square
  ];
  
    const [open, setOpen] = useState(false);
  const modalRef = useRef();

  const shareUrl = window.location.href;

  // Close saat klik luar
  useEffect(() => {
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Native share (HP)
  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Check this out!",
        url: shareUrl,
      });
    } else {
      alert("Fitur share tidak didukung di device ini");
    }
  };

  // Copy link
  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link berhasil disalin!");
  };

// handle comment
  const handleComment = () => {
  if (comment.trim() === "") return;

  setComments([
    ...comments,
    {
      id: Date.now(),
      text: comment,
    },
  ]);

  setComment("");
  closeModal();
};
// handle like
  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  };

  // carousel
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
        <div className=''>
      <main className='flex-1 flex justify-center '>
        <div className="w-full max-w-xl ">
            <div className="border-b">
                {/* Header */}
                <div className="flex justify-between items-center py-3 px-4">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-8 text-4xl rounded-full">
                                <RxAvatar />
                            </div>
                        </div>
                        <span className='font-semibold text-sm'>Username</span>
                    </div>
                    <span className='cursor-pointer text-2xl text-center'>...</span>
                </div>
                {/* image */}
                <div className="w-full flex flex-col items-center">

      {/* Container */}
      <div className="
        relative 
        w-full md:w-3/4
        max-w-xl 
        h-64 sm:h-80 md:h-96 
        overflow-hidden 
        bg-gray-100 
        rounded-xl 
        shadow-md
      ">

        {/* Image */}
        <img
          src={images[index]}
          alt="carousel"
          className="
            w-full 
            h-full 
            object-contain 
            transition-all duration-300
          "
        />

        {/* Tombol kiri */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-1 py-1 rounded-full"
        >
          <GrFormPrevious className="text-2xl"/>
        </button>

        {/* Tombol kanan */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-1 py-1 rounded-full"
        >
          <GrFormNext className="text-2xl"/>
        </button>
      </div>

      {/* Indicator */}
      <div className="flex gap-2 mt-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
                {/* action */}
                <div className="flex justify-between px-4 py-3">
                    <div className="flex gap-4 text-xl">
                        <button onClick={handleLike}>{liked ? <FaHeart className='cursor-pointer hover:text-red-500 transition'/> : <FaRegHeart className='cursor-pointer hover:text-red-500 transition'/>}</button>
                        <button onClick={openModal}><FaRegComment></FaRegComment></button>
                        <FaRegPaperPlane onClick={() => setOpen(true)}></FaRegPaperPlane>
                         {open && (
        <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">

          <div
            ref={modalRef}
            className="
              w-full 
              bg-white 
              rounded-t-2xl 
              p-5 
              animate-slideUp
            "
          >
            {/* Drag indicator */}
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

            <h2 className="text-center font-semibold mb-4">
              Bagikan ke
            </h2>

            {/* Icon horizontal (TikTok style) */}
            <div className="flex gap-6 overflow-x-auto pb-2">

              <a
                href={`https://wa.me/?text=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center min-w-17.5"
              >
                <FaWhatsapp size={30} className="text-green-500" />
                <span className="text-xs mt-1">WhatsApp</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center min-w-17.5"
              >
                <FaTelegram size={30} className="text-blue-400" />
                <span className="text-xs mt-1">Telegram</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center min-w-17.5"
              >
                <FaFacebook size={30} className="text-blue-600" />
                <span className="text-xs mt-1">Facebook</span>
              </a>

              {/* Copy */}
              <button
                onClick={handleCopy}
                className="flex flex-col items-center min-w-17.5 cursor-pointer"
              >
                <FaLink size={30} />
                <span className="text-xs mt-1">Copy</span>
              </button>

              {/* Native Share */}
              <button
                onClick={handleNativeShare}
                className="flex flex-col items-center min-w-17.5 cursor-pointer"
              >
                <FaShare size={30} />
                <span className="text-xs mt-1">More</span>
              </button>

            </div>

            {/* Cancel */}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full border-t pt-3 text-center font-semibold text-red-500 hover:bg-red-600 hover:text-white transition px-4 py-2 rounded-lg"
            >
              Batal
            </button>
          </div>
        </div>)}
                                              {/* Comment */}
                        {isOpen && (
                          <div className="fixed inset-0 flex items-center justify-center bg-black/50"
          onClick={closeModal}>
            <div className="bg-white rounded-2xl p-6 w-80 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}>
              <h2 className="text-xl font-bold mb-4">Comment</h2>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} id="" className='w-full border p-2 rounded mb-3' placeholder='Tulis Komentar...'></textarea>
            <div className="flex justify-end gap-2">

            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 "
            >
              Batal
            </button>
            <button
              onClick={handleComment}
              className="bg-blue-400 text-white px-4 rounded-lg hover:bg-blue-600"
            >
              Kirim
            </button>
            </div>
            </div>
          </div>
                        )}
                    </div>
                        <FaRegBookmark className='cursor-pointer text-xl'/>
                </div>
            </div>
                                              {/* caption */}
            <div className="px-4 pb-4 text-sm">
               <p className='font-semibold'>{likes} likes</p> 
               <p className=''>
                <span className='font-bold mr-1'>Username</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus blanditiis soluta aperiam explicabo, dolorum quod necessitatibus quam expedita est quae suscipit, dignissimos asperiores ut consequuntur quas id labore totam.
                </p>
                <div className="mt-2 space-y-1">
    {comments.map((item) => (
      <p key={item.id}>
        <span className="font-semibold mr-1">User</span>
        {item.text}
      </p>
    ))}
  </div>
                <p className='text-xs text-gray-500 mt-1'>2 days ago</p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Home