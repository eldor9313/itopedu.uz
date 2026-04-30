import React, { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CATEGORY_2, CategoryType2 } from "../../../constants/about";

/* TYPES */
type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export default function Service() {
  const { t } = useTranslation();

  const [category2, setCategory2] = useState<CategoryType2>(
    CATEGORY_2.LANGUAGE_COURSE,
  );

  const serviceData = t("aboutservice.serviceData", {
    returnObjects: true,
  }) as Record<CategoryType2, Omit<ServiceItem, "image">[]>;

  const serviceImages: Record<CategoryType2, string[]> = {
    LANGUAGE_COURSE: [
      "/img/service/language.png",
      "/img/service/language.png",
      "/img/service/language.png",
    ],
    BACHELOR: [
      "/img/service/bachelor.png",
      "/img/service/bachelor.png",
      "/img/service/bachelor.png",
    ],
    MASTER_PHD: [
      "/img/service/master.png",
      "/img/service/master.png",
      "/img/service/phd.png",
    ],
    OTHER_VISA: ["/img/service/visa.png", "/img/service/visa.png"],
  };

  return (
    <div id="service" className="service">
      <Container>
        <Stack alignItems="center">
          {/* TITLE */}
          <Box className="top-title">{t("about.services")}</Box>

          {/* BUTTONS */}
          <div className="category-main">
            <Button
              className={`btn ${category2 === "LANGUAGE_COURSE" ? "active" : ""}`}
              onClick={() => setCategory2(CATEGORY_2.LANGUAGE_COURSE)}
            >
              {t("about.serviceTabs.language")}
            </Button>

            <Button
              className={`btn ${category2 === "BACHELOR" ? "active" : ""}`}
              onClick={() => setCategory2(CATEGORY_2.BACHELOR)}
            >
              {t("about.serviceTabs.bachelor")}
            </Button>

            <Button
              className={`btn ${category2 === "MASTER_PHD" ? "active" : ""}`}
              onClick={() => setCategory2(CATEGORY_2.MASTER_PHD)}
            >
              {t("about.serviceTabs.master_phd")}
            </Button>

            <Button
              className={`btn ${category2 === "OTHER_VISA" ? "active" : ""}`}
              onClick={() => setCategory2(CATEGORY_2.OTHER_VISA)}
            >
              {t("about.serviceTabs.other_visa")}
            </Button>
          </div>

          {/* CARDS */}
          <Stack className="service-wrapper">
            {serviceData[category2].map((item, index) => (
              <div key={index} className="service-card">
                {/* IMAGE */}
                <div
                  className="service-image"
                  style={{
                    backgroundImage: `url(${serviceImages[category2][index]})`,
                  }}
                />

                {/* INFO */}
                <div className="service-info">
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
