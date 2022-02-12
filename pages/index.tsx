import services from './aws.json'
export default function Index() {
  return (
    <>
      <div className="p-10">
        <h1 className="font-bold text-6xl mb-10">
          AWS Services
        </h1>
        <h2 className="text-4xl text-gray-500 mb-5">
          Top Services
        </h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-2 gap-4 xs:grid-cols-1">


          {services.map((service: any) => {
            if (service?.mostUsed) {
              return (
                <div className="shadow p-5 border border-red-400 rounded-lg">
                  <div className="flex h-full flex-col justify-between ">
                    <p>{service.name}</p>
                    <a className='text-blue-500' target={'_blank'} href={service.link} rel="noreferrer">Link</a>
                  </div>
                </div>
              )
            }
          })}
        </div>

        <h2 className="text-4xl text-gray-500 mb-5 mt-10">
          Other Services
        </h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-2 gap-4 xs:grid-cols-1">

          {services.map((service: any) => {

            if (service?.mostUsed) {
              return null
            }

            return (
              <>
                <div className="shadow p-5 border border-gray-400 rounded-lg">
                  <div className="flex h-full flex-col justify-between ">
                    <p>{service.name}</p>
                    <a className='text-blue-500' target={'_blank'} href={service.link} rel="noreferrer">Link</a>
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>
    </>
  )
}