import { Link } from "gatsby"

const DynamicLink = ({ url, data, title, classvalue }) => (
  <>
    {url[0] == "/" ? (
      <Link className={classvalue} to={`${url}${data ? `?tab=${data}` : ""}`}>
        <span>{title}</span>
      </Link>
    ) : (
      <a href={url} className={classvalue} target="_blank">{title}</a>
    )}
  </>
)

export default DynamicLink