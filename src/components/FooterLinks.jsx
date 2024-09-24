function FooterLinks({data}) {
  return (
    <div className="pt-10 text-center lg:text-left">
      <h3 className="text-gray-500 text-sm mb-4">{data.title}</h3>
      <ul>
        {data.links.map((link, index) => {
          return <li key={index} className="text-sm mb-2 tracking-widest font-bold">
            {link}
          </li>
        })}
      </ul>
    </div>
  )
}

export default FooterLinks;