import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

function LongDialog({ open, setOpen }) {
  const [AccordianOpen, setAccordianOpen] = useState(0);
  const handleAccordianOpen = (value) =>
    setAccordianOpen(AccordianOpen === value ? 0 : value);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Description of the categories</DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <Accordion open={AccordianOpen === 1}>
            <AccordionHeader onClick={() => handleAccordianOpen(1)}>
              Space Exploration and Astronomy
            </AccordionHeader>
            <AccordionBody>
              Space exploration encompasses the study and investigation of
              celestial bodies beyond Earth's atmosphere. It includes missions,
              probes, and telescopic observations aimed at understanding the
              cosmos, neighboring planets, stars, galaxies, and other celestial
              phenomena. This category involves collecting data on spacecraft
              missions, satellite observations, space telescopes, and astronaut
              activities. It provides valuable insights into our universe's
              mysteries, from planetary geology to astrophysics, and informs our
              understanding of the cosmos as a whole.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 2}>
            <AccordionHeader onClick={() => handleAccordianOpen(2)}>
              Climate and weather{" "}
            </AccordionHeader>
            <AccordionBody>
              Climate refers to the long-term patterns of temperature,
              precipitation, humidity, and other atmospheric conditions in a
              specific region over extended periods, shaping the overall
              environmental characteristics of an area. In contrast, weather
              encompasses short-term, day-to-day variations in elements like
              temperature, wind speed, and precipitation. It's the immediate
              atmospheric state that affects our daily activities. Both climate
              and weather data are invaluable for understanding Earth's dynamic
              systems, from predicting short-term events like storms and
              heatwaves to studying long-term trends like global temperature
              shifts, which inform decisions in agriculture, urban planning,
              disaster preparedness, and environmental policy.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 3}>
            <AccordionHeader onClick={() => handleAccordianOpen(3)}>
              Ocean and Marine
            </AccordionHeader>
            <AccordionBody>
              The marine environment encompasses all aspects of the Earth's
              saltwater ecosystems, including oceans, seas, and coastal areas.
              Marine data covers a wide range of topics, from biodiversity and
              oceanography to fisheries and coastal management. It includes
              information on marine species, their habitats, and the
              interactions between them. This data is essential for conserving
              marine biodiversity, managing fisheries sustainably, protecting
              coastal zones, and understanding the intricate web of life within
              the world's oceans.
            </AccordionBody>
          </Accordion>

          {/*  */}
          <Accordion open={AccordianOpen === 4}>
            <AccordionHeader onClick={() => handleAccordianOpen(4)}>
              Spectral Engineering{" "}
            </AccordionHeader>
            <AccordionBody>
              Spectral engineering is a field of science and technology that
              focuses on manipulating and controlling the electromagnetic
              spectrum, which encompasses all forms of electromagnetic
              radiation, including radio waves, microwaves, infrared radiation,
              visible light, ultraviolet radiation, X-rays, and gamma rays. The
              goal of spectral engineering is to design and develop materials,
              devices, and systems that can interact with specific portions of
              the electromagnetic spectrum in desired ways.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 5}>
            <AccordionHeader onClick={() => handleAccordianOpen(5)}>
              Agriculture and Land{" "}
            </AccordionHeader>
            <AccordionBody>
              Agriculture is the practice of cultivating plants, animals, and
              other organisms for food, fiber, medicinal plants, and other
              products used to sustain and enhance human life. It encompasses a
              wide range of activities, including crop production, animal
              husbandry, and agroforestry. Agriculture data includes information
              on crop yields, soil health, weather patterns, pest management,
              and sustainable farming practices. This data is crucial for
              optimizing agricultural processes, ensuring food security, and
              promoting sustainable and efficient farming techniques.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 6}>
            <AccordionHeader onClick={() => handleAccordianOpen(6)}>
              Environment and Ecosystem{" "}
            </AccordionHeader>
            <AccordionBody>
              An environment ecosystem is a biological community of interacting
              organisms (plants, animals, and microorganisms) and their physical
              environment. It's a dynamic system where living organisms, their
              habitats, and the surrounding physical and chemical conditions
              interact and influence one another. Ecosystem data encompasses
              information on species diversity, population dynamics, nutrient
              cycles, and energy flow within a given ecosystem. Studying
              ecosystems helps scientists understand the delicate balance of
              life and the impacts of human activities on natural habitats. If
              you have any more questions or need further information, feel free
              to ask!
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 7}>
            <AccordionHeader onClick={() => handleAccordianOpen(7)}>
              Public Health and Surveilance{" "}
            </AccordionHeader>
            <AccordionBody>
              Surveillance in a public health context involves the systematic
              collection, analysis, and interpretation of health-related data.
              This data is used to monitor the occurrence and distribution of
              diseases, injuries, and other health conditions within a
              population. Surveillance data includes information on disease
              outbreaks, trends in illness, and the effectiveness of
              interventions. It plays a vital role in early detection of health
              threats, planning and evaluating public health programs, and
              making informed decisions for disease control and prevention.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 8}>
            <AccordionHeader onClick={() => handleAccordianOpen(8)}>
              Human Dimension{" "}
            </AccordionHeader>
            <AccordionBody>
              The term "human dimension" encompasses the intricate interplay of
              social, cultural, psychological, and behavioral aspects within
              various contexts. It delves into the depths of human experience,
              examining how societies function, how individuals think and feel,
              and how our actions shape the world around us. From understanding
              the influences of culture and traditions to unraveling the
              complexities of human behavior in economic and organizational
              settings, the human dimension is a multidimensional lens through
              which we perceive and navigate the intricate web of human
              existence. It underpins fields ranging from psychology and
              sociology to economics, design, and global humanitarian efforts,
              emphasizing the pivotal role that human dynamics play in shaping
              our societies, economies, and the world at large.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 8}>
            <AccordionHeader onClick={() => handleAccordianOpen(8)}>
              Hydrosphere and Cyrosphere{" "}
            </AccordionHeader>
            <AccordionBody>
              The hydrosphere encompasses all the water on Earth's surface,
              including oceans, seas, lakes, rivers, and even water vapor in the
              atmosphere, while the cryosphere refers to the frozen portions of
              the planet, such as ice caps, glaciers, and permafrost. Together,
              they are critical components of Earth's complex environmental
              system. The hydrosphere plays a vital role in regulating climate,
              supporting diverse ecosystems, and sustaining human activities.
              Understanding factors like water quality, temperature, and
              currents is crucial for managing resources and addressing
              environmental challenges. On the other hand, the cryosphere
              significantly influences sea levels, weather patterns, and climate
              dynamics. Monitoring ice thickness, movement, and snow cover
              changes is essential for assessing the impacts of climate change,
              particularly in regions where frozen environments have
              far-reaching effects on both local and global scales.
            </AccordionBody>
          </Accordion>
          <Accordion open={AccordianOpen === 8}>
            <AccordionHeader onClick={() => handleAccordianOpen(8)}>
              Disease and Injury
            </AccordionHeader>
            <AccordionBody>
              A disease is a deviation from normal functioning of the body or
              mind, often caused by pathogens (such as bacteria, viruses, or
              parasites), genetic factors, environmental influences, or a
              combination of these. Diseases can range from infectious
              conditions like flu or tuberculosis to chronic diseases like
              diabetes or heart disease. Understanding diseases involves
              studying their causes, symptoms, progression, and potential
              treatments. Disease data encompasses information on prevalence,
              incidence, mortality rates, and factors contributing to their
              occurrence. This data is critical for healthcare planning,
              research, and the development of effective prevention and
              treatment strategies.
            </AccordionBody>
          </Accordion>

          {/*  */}
        </DialogBody>
      </Dialog>
    </>
  );
}

export default LongDialog;
