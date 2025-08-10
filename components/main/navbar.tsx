"use client";
import { useState, useEffect, useRef } from "react";
import { MdMenu, MdClose, MdArrowUpward } from "react-icons/md";
import { SOCIALS } from "@/constants";

export const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleIcons = () => setShowIcons((prev) => !prev);
  const collapseIcons = () => setShowIcons(false);

  // Hide icons on scroll & show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowIcons(false);
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close icons when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        collapseIcons();
      }
    };
    if (showIcons) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showIcons]);

  const onSocialClick = (socialName: string) => {
    const urls: Record<string, string> = {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      discord: "https://discord.com",
      mail: "mailto:contact@yoursite.com",
    };
    const url = urls[socialName];
    if (url) {
      if (socialName === "mail") window.location.href = url;
      else window.open(url, "_blank", "noopener,noreferrer");
    }
    collapseIcons();
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .nav-container {
          position: fixed;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          z-index: 1000;
        }
        .social-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .menu-button {
          width: 70px;
          height: 70px;
          background: rgba(193, 255, 179, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
        }
        .scroll-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
          z-index: 1100;
          transition: transform 0.3s ease;
        }
        .scroll-top:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="nav-container" ref={navRef}>
        {showIcons &&
          SOCIALS.slice(0, 3).map(({ name, icon: Icon }) => (
            <button
              key={name}
              title={name}
              onClick={() => onSocialClick(name.toLowerCase())}
              className="social-icon"
              type="button"
            >
              <Icon />
            </button>
          ))}

        <button
          aria-label={showIcons ? "Hide icons" : "Show icons"}
          onClick={toggleIcons}
          className="menu-button"
          type="button"
        >
          {showIcons ? <MdClose /> : <MdMenu />}
        </button>

        {showIcons &&
          SOCIALS.slice(3, 6).map(({ name, icon: Icon }) => (
            <button
              key={name}
              title={name}
              onClick={() => onSocialClick(name.toLowerCase())}
              className="social-icon"
              type="button"
            >
              <Icon />
            </button>
          ))}
      </div>

      {showScrollTop && (
        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          type="button"
        >
          <MdArrowUpward size={28} />
        </button>
      )}
    </>
  );
};
