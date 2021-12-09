import { Link, Outlet } from "react-router-dom"
const Index = ({ allCountries }) => {
  return (
    <>
      <div className="flex border-r border-gray-200 pb-4 bg-white overflow-y-auto ">
        <nav className="flex px-2 space-y-8 bg-white w-1/4">
          <div className="w-full">
            {allCountries.map((element, i) => {
              return (
                <Link
                  key={i}
                  to={element.cca3}
                  className="bg-gray-100 text-gray-900 group flex px-2 py-2 text-sm font-medium underline"
                >
                  {element.name.common}
                </Link>
              );
            })}
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export default Index
