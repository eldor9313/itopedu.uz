import React, { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Address() {
  const { t } = useTranslation();
  return (
    <div id="address" className="address">
      <Container>
        <Stack className="address-office">
          <Stack className="address-area1">
            <Box className="title">{t("about.office")}</Box>

            <div className="map-address">
              <strong>{t("about.address")}:</strong>
              136 Seogang-ro, Mapo-gu, Seoul (IVY Tower 802)
            </div>

            <Box className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.025144086062!2d126.93312257587318!3d37.55405877204183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98be29bac827%3A0x57aba3773b733ae7!2s136%20Seogang-ro%2C%20Mapo-gu%2C%20Seoul!5e1!3m2!1sen!2skr!4v1777511084788!5m2!1sen!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </Box>

            <a
              href="https://maps.google.com?q=136+Seogang-ro,+Mapo-gu,+Seoul"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              {t("about.openMap")}
            </a>
          </Stack>
          <Stack className="address-area2">
            <Box className="title">{t("about.office2")}</Box>

            <div className="map-address">
              <strong>{t("about.address")}:</strong>
              Room 209, 22 Beshyogoch Street, Shaykhantahur District, Tashkent
            </div>

            <Box className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6205.260170780265!2d69.27279876121871!3d41.27428897922596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1suz!2skr!4v1776407477996!5m2!1suz!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </Box>

            <a
              href="https://www.google.com/maps?q=41.2731944,69.2764722"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              {t("about.openMap")}
            </a>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
