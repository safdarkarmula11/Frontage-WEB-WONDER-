import ModelCredits from "../../common/ModelCredits";

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-neutral-400">
        <p>© 2026 JurassicVerse. All rights reserved.</p>

        <div className="mt-2 flex flex-col items-center">
          <ModelCredits compact />
        </div>
      </div>
    </footer>
  );
}

export default Footer;