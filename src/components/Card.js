const Card = ({item}) =>{
    return(
        <div
        key={item.episode_id}
        className="p-6 bg-slate-800 rounded-lg"
      >
        <h2 className="text-white text-xl font-semibold">
          {item.title}
        </h2>
        <p className="text-white mb-4 ">{item.release_date}</p>
        <p className="text-white mb-6">{item.opening_crawl}</p>
        <div className="border-[4px] border-red-500"></div>
        <a href="/" className="text-yellow-300">
          More info
        </a>
      </div>
    )
}

export default Card