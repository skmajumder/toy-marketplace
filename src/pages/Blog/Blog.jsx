import React from "react";

const Blog = () => {
  return (
    <>
      <section className="section-blog">
        <div className="container px-10">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <section className="grid gap-8 lg:grid-cols-1 justify-center items-center">
              {/* Question 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  1. What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h2>
                <p className="text-gray-700 mb-4">
                  <strong>JSON Web Tokens</strong> (JWT) access and refresh
                  tokens have various authentication and authorization
                  functions.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>1. Access Token:</strong> A digitally signed and
                  encoded string that conveys user authorisation. It includes
                  user identity and access rights claims. Access tokens last
                  just minutes or hours. Request headers include them to access
                  server-protected sites.
                  <br />
                  <br />
                  <strong>2. Refresh Token:</strong> Like an access token, a
                  refresh token is digitally signed and encoded but lasts
                  longer. Refresh tokens are used to get new access tokens after
                  they expire. They are used when the user wishes to keep their
                  session without reauthenticating. Client-side refresh tokens
                  are safe and inaccessible.
                </p>
                <p className="text-gray-700 mb-4">
                  Access and refresh token authentication follows this flow:
                </p>
                <ul className="list-decimal space-y-5 mt-3 ml-5 mb-4 text-[15px]">
                  <li>
                    The server receives user credentials at first
                    authentication.
                  </li>
                  <li>
                    If credentials are real, the server produces access and
                    refresh tokens.
                  </li>
                  <li>
                    The server delivers the access token to the client, who may
                    include it in protected resource request headers.
                  </li>
                  <li>
                    The server securely holds or delivers the refresh token to
                    the client, depending on implementation.
                  </li>
                  <li>
                    {" "}
                    Clients may transmit refresh tokens to servers when access
                    tokens expire.
                  </li>
                  <li>
                    The server checks the refresh token and provides the client
                    a new access token if it's valid.
                  </li>
                  <li>
                    The client may continue accessing protected resources with
                    the new access token.
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  For security, client-side access tokens and refresh tokens
                  should be stored securely. Common practises:
                </p>
                <ul className="list-decimal space-y-5 mt-3 ml-5 mb-4 text-[15px]">
                  <li>
                    HTTP Cookies: Store tokens in JavaScript-inaccessible
                    HTTP-only cookies. This prevents XSS attacks.
                  </li>
                  <li>
                    Local Storage: Client browsers may store tokens. This
                    approach may expose tokens to XSS attacks.
                  </li>
                  <li>
                    In-Memory Storage: Client-side token storage does not
                    persist beyond browser sessions or page reloads. For
                    short-lived tokens.
                  </li>
                </ul>
              </div>

              {/* Question 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  2. Compare SQL and NoSQL databases?
                </h2>
                <p className="text-gray-700 mb-4">
                  <strong>SQL</strong>(Structured Query Language) databases and{" "}
                  <strong>NoSQL</strong> ("non SQL" while others say it stands
                  for "not only SQL.") databases are two separate kinds of
                  database management systems. The following is a comparison
                  between SQL and NoSQL databases:
                </p>
                <p className="text-gray-700 mb-4">
                  <strong> 1. Data Model:</strong> SQL: SQL databases store data
                  in tables with preset schemas. Keys link rows and columns in
                  tables. NoSQL supports key-value, document, columnar, and
                  graph data models. They manage unstructured, semi-structured,
                  and fast-changing data.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>2. SQL schema:</strong> Each table's structure and
                  data types are determined by the schema. Schemas maintain data
                  integrity and organise data storage and retrieval. NoSQL:
                  Schema-less or schema-flexible. They store varied and
                  developing data without a predetermined structure using
                  dynamic schemas.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>3. Scalability:</strong> SQL: SQL databases expand
                  vertically by adding CPU and RAM to a single server.
                  Horizontal scaling—adding servers—is difficult. NoSQL
                  databases scale horizontally. They may spread data across
                  servers or clusters for smooth scaling as demand grows.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Queries:</strong> SQL retrieves, manipulates, and
                  manages relational data. It supports joins, aggregations, and
                  sophisticated queries. NoSQL databases typically contain data
                  model-specific query languages or APIs. SQL has more powerful
                  querying tools, yet query languages may be simpler and more
                  versatile.
                </p>
              </div>

              {/* Question 3 */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  3. What is express js? What is Nest JS?
                </h2>
                <p className="text-gray-700 mb-4">
                  <strong>Express.js</strong> is quick, simple, and adaptable
                  for Node.js web projects. It provides easy and powerful web
                  app and API technologies. Express.js' neutrality allows
                  authors greater discretion over application design. It
                  provides middleware for flexible, reusable pieces.
                </p>
                <p className="text-gray-700 mb-4">
                  Routing, HTTP requests and answers, templates, and more are
                  straightforward to implement. Express.js is one of the most
                  popular Node.js web app frameworks due to its large community
                  and environment.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>NestJS</strong> is a framework that enables developers
                  to swiftly create Node.js web applications that are
                  high-performing and highly scalable. It was built using
                  TypeScript and modern JavaScript, both of which were employed
                  in the creation.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Nest.JS</strong> builds lightweight, well-structured,
                  outstanding microservices and evolves the technological stack.
                  The microservice design delivers huge, sophisticated
                  applications quickly, often, and reliably. Out-of-the-box
                  tools streamline creation, extension, and maintenance.
                </p>
                <p className="text-gray-700 mb-4">
                  Express.js, on the other hand, is a minimal and adaptable web
                  application framework for Node.js, whereas NestJS, built on
                  top of Express.js, is more opinionated and feature-rich, with
                  an emphasis on creating scalable and maintainable server-side
                  applications in TypeScript.
                </p>
              </div>

              {/* Question 4 */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                  4. What is MongoDB aggregate and how does it work?
                </h2>
                <p className="text-gray-700 mb-4">
                  The aggregate function in MongoDB lets you handle and analyse
                  document collections. The aggregate function transforms and
                  manipulates data in a pipeline, allowing flexible and
                  expressive aggregation and computation.
                </p>
                <p className="text-gray-700 mb-4">
                  The aggregate function accepts a pipeline stage array. Each
                  step transforms the collection's papers. Each stage's output
                  becomes the following stage's input.
                </p>
                <p className="text-gray-700 mb-4">
                  Some typical aggregate pipeline steps are explained below:
                </p>
                <ul className="list-decimal space-y-5 mt-3 ml-5 mb-4 text-[15px]">
                  <li>
                    $match: Like find, filters documents by criteria. It lets
                    you filter documents by criteria.
                  </li>
                  <li>
                    $group: Groups documents by key and aggregates them.
                    Calculate counts, sums, averages, and more complicated
                    aggregations.
                  </li>
                  <li>
                    $project: Reshapes documents to include or omit fields,
                    generate calculated fields, rename fields, or reorganise
                    document structure.
                  </li>
                  <li>$sort: Sorts documents by fields and order.</li>
                  <li>
                    $limit and $skip: Limit or skip the amount of documents
                    returned.
                  </li>
                  <li>
                    $lookup: Performs a left outer join with another collection
                    to merge data based on a similar field.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
