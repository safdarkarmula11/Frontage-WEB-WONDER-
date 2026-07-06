import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

function About() {
  return (
    <main className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">

        <SectionTitle
          title="About JurassicVerse"
          subtitle="An interactive digital museum for exploring the prehistoric world."
        />

        <div className="space-y-8 text-lg leading-8 text-neutral-300">

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Our Mission
            </h2>

            <p>
              JurassicVerse is a full-stack web application that allows users to
              discover dinosaurs, explore geological eras, and learn about
              prehistoric life through an interactive digital museum.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Features
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Browse dinosaurs from a database.</li>
              <li>Explore the geological timeline.</li>
              <li>View detailed dinosaur information.</li>
              <li>Featured dinosaur collection.</li>
              <li>Search dinosaurs by name, era, or diet.</li>
              <li>Admin dashboard for content management.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Technology Stack
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
                <h3 className="font-semibold text-green-500">
                  Frontend
                </h3>

                <p className="mt-2">
                  React, Vite, React Router, Tailwind CSS
                </p>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
                <h3 className="font-semibold text-green-500">
                  Backend
                </h3>

                <p className="mt-2">
                  Node.js, Express, Prisma ORM, MySQL
                </p>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
                <h3 className="font-semibold text-green-500">
                  Authentication
                </h3>

                <p className="mt-2">
                  JSON Web Token (JWT)
                </p>
              </div>

              <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
                <h3 className="font-semibold text-green-500">
                  Database
                </h3>

                <p className="mt-2">
                  MySQL with Prisma relations
                </p>
              </div>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}

export default About;