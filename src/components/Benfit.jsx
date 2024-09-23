function Benefit({data}) {
  return (
    <div className="flex flex-col items-center">
      <img src={data.url} alt={data.alt}
        className="w-16 h-auto mb-8"/>
      <h3 className="text-2xl font-bold mb-2">
        {data.title}
      </h3>
      <p className="text-gray-500">
        {data.text}
      </p>
    </div>
  )
}

export default Benefit;