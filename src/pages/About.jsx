import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{
        backgroundImage: "url('/wedding-dress-salon-india-bridal-gown-gold-embroidery-detail-mannequin-dresses-hang-racks-stylish-attire-fashion-colors-385659358.jpg')",
        backgroundSize: "contain", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "100px 40px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "450px"
      }}>
        <div className="overlay" style={{
          background: "rgba(0,0,0,0.3)",
          borderRadius: "20px",
          padding: "40px 60px",
          textAlign: "center",
          color: "#fff",
          maxWidth: "700px",
          margin: "auto"
        }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: "bold", marginBottom: "18px", textAlign: "center", letterSpacing: "1px", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}>Woven with Heritage, Designed for Today</h1>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.25rem", fontWeight: "500", textAlign: "center", marginBottom: 0, textShadow: "1px 1px 6px rgba(0,0,0,0.3)" }}>
            Discover the soul of Sri Lanka in every stitch. House of Salaga brings you timeless elegance, ethically crafted.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          At House of Salaga, our mission is to blend timeless Sri Lankan
          artistry with contemporary design. We are committed to sustainable and
          ethical fashion, creating pieces that are not only beautiful but also
          tell a story of heritage, craftsmanship, and conscious living.
        </p>
      </section>

      {/* Heritage */}
      <section className="about-section heritage">
        <h2>Our Heritage</h2>
        <p>
          Our brand is deeply rooted in the rich cultural tapestry of Sri Lanka.
          From the vibrant colors of the Kandy Esala Perahera to the serene
          beauty of the southern coast, our collections draw inspiration from
          the island's landscapes, traditions, and ancient craftsmanship.
        </p>

        <div className="heritage-grid">
          <div className="heritage-card">
            <div
              className="heritage-img"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfs4vJGT7wEpFG31AFdNy2NFQpT1ThTAmPL9ACALdTTCuq8rqvfbglsVptOJvb6A49h8JNRczyP_n2gXOx3qwgxstq_YAa5O5Ca-Ow2Td3RPdLpOrFyhf-vq2cwdYPuWkUB7ljrJU0N3BlK7rkxZ_2KYr2TK-nWSBnQ-upoL8b4eqMtjEuTaVG6aOAhgXSm8RCcL2le4D1FrK2exWgwbjqhleiOoHCxNX5mbrjfY0sm4xRouwS-wrh2RhnB6PfaNiquGf19M9V5-Q')",
              }}
            ></div>
            <h3>Traditional Weaving</h3>
            <p>
              Honoring centuries-old techniques passed down through generations.
            </p>
          </div>

          <div className="heritage-card">
            <div
              className="heritage-img"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSQTIl-VgxWfvBir8zLkzYoQOIRcLA-VedRsU9bWIbAxi8opRHIm86Nicw_PpewtezjdTBfyijm6LeDldVEdxDzzL7RvlWq9I4LdZ7ybxpUr8qU0f5XMwBxho-_lhRgUnC953fMf1VzI6XuqFKKast9b5CoMsUmg3FyOqFqLSix2bzDI-bCn8Hzmf7znNujlMGecyfXXYOh2Urza-m-jCz9emEylpFjXhYeNotT1IewN2_yzSi7hvwPM_RJtzTXyH2P11cZsb_vSI')",
              }}
            ></div>
            <h3>Natural Dyes</h3>
            <p>
              Utilizing vibrant, earthy tones derived from local plants and
              minerals.
            </p>
          </div>

          <div className="heritage-card">
            <div
              className="heritage-img"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRGikLiwcdwXJLuHkRsxZgPUeCG-2TbcIWkv_TZtZA__o-uw5sDVsfT5iwpibaCVXnBA6lLzATAgoHTVWBVlNSNfbAwHnphGDs8j1LHYpxIKt_twiqnV7DXrw4H4eT09X2IEuwdw0Vm0QxmbN_4dUM-oTvTbdhNXoDp0cxGgjkIcOPYLeitPnucW5iDftbu5X6HQhH74RmE9dkOcDIzrtxft86fvt4lH8lU6hMHy-UzSn-UhxIAoSt9c4xBDMY9PVk1sEE_9UD2tA')",
              }}
            ></div>
            <h3>Island Flora</h3>
            <p>
              Inspired by the intricate patterns of Sri Lanka's native flowers
              and leaves.
            </p>
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section className="about-section artisans">
        <h2>Meet Our Artisans</h2>
        <p>
          The heart of House of Salaga lies in the hands of our skilled
          artisans. They are the keepers of tradition and the masters of craft
          who pour their passion into every piece.
        </p>

        <div className="artisan-grid">
          <div className="artisan-card">
            <div
              className="artisan-img"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSdjOCy2lenl_kv2HsAYPc9dHEvMDIq0ohams9eUPGgAqGPkCrRebAmR04AS6idDuce4bON_iB0qRzsKeDrfDCikk6mjkO8I2evEeWkJTqT9UBECOXlvvxRyq8ii3FutO-7hURtR8uv2ASOGPAOpz6Mja2GWG6F8GuvseYfbUTfUc6Ss8u2qo4ZVaQo_x20gbtohZWklwlxVP89d8myx1A173ev0eFwTFbfaAtgCA7Jg7I6Xp0b3Xqrap8YZzVIh_rnMaXBOpHlxA')",
              }}
            ></div>
            <h3>Nimali Fernando</h3>
            <p className="role">Master Weaver</p>
            <p className="quote">
              “Weaving is not just a job; it’s a meditation. Each thread tells a
              story of my ancestors.”
            </p>
          </div>

          <div className="artisan-card">
            <div
              className="artisan-img"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWeJ61Q6O1--bniquer4qo49BOqECh-JeDb3rLhomYRbI6pitpCfDvca-qNHUDpxnUlsRumot3RwcTPcIgeTQmq23G6aOkesXVFtz95k6GtCI-NwuVtrNiXvhQMJwiys1nomIAB3w5zGuAj0cyEHy0zLDUxoAOEGY7ZHT1_77lP-34cAFF0zb2-hPGBwJVNnBBYHyrwuNOIu02SnQJV6Le4_38CaiKFN44JBuJIt5q_hy5cxiU6WLFHyxZ3Y1wNUDMre9MLh1pP7A')",
              }}
            ></div>
            <h3>Rohan Perera</h3>
            <p className="role">Dye Specialist</p>
            <p className="quote">
              “The colors of our land are a gift. Working with natural dyes
              connects me to the earth.”
            </p>
          </div>

          <div className="artisan-card">
            <div
              className="artisan-img"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqgcECLEr-ClmjXBlQ9i-h5eB11IPiRcDKFY5aJa30FzNWQc3zPS6M3rRjoEG258dr2yD8qLvYai_ihQv9TrNX_d5Qvr_06S0_mCa_3gk8WtDzKVFCfA5g3PkO-Ym5V6TvoBma5O5Rw-SouFPNX-zRVIS2tehKd5mrNpNgSf1qMSQtfmGrlItYvavefgNSrYt0Nt74iD3cLGDnI3ZcI1HOwHzdVwJHXfMjgbyTs8vqynlp0N5EHa18sBSjLPEh2epsYcEnGRCI0sw')",
              }}
            ></div>
            <h3>Anusha Silva</h3>
            <p className="role">Lead Seamstress</p>
            <p className="quote">
              “Seeing a design on paper transform into a finished garment is
              magical. It’s an honor to craft beauty.”
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Be a Part of Our Story</h2>
        <p>
          Each piece you purchase supports our artisans, preserves our heritage,
          and promotes a more conscious way of living.
        </p>
        <button>Shop Our Story</button>
      </section>
    </div>
  );
}
