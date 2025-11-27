function CarouselSlide({ slide }) {
    return (
        <div id={slide.id} className="carousel-item relative w-full">
            <img src={slide.image} className="w-full h-96 object-cover" alt={slide.title} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#${slide.prev}`} className="btn btn-circle">❮</a>
                <h2 className='text-2xl font-semibold text-gray-900'>{slide.title}</h2>
                <a href={`#${slide.next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
}

export default CarouselSlide;