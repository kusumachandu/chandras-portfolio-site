"use client";

import { Box, SimpleGrid, Text, VStack, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import { skills } from "@/app/data/portfolio";
import { useReveal } from "@/app/components/useReveal";

function SkillCard({ icon, name, items, delay }: { icon: string; name: string; items: string[]; delay: string }) {
  const [ref, vis] = useReveal();
  return (
    <Box
      ref={ref}
      bg="brand.bg1" border="1px solid" borderColor="brand.border"
      borderRadius="16px" p={6}
      opacity={vis ? 1 : 0}
      transform={vis ? "translateY(0)" : "translateY(28px)"}
      transition={`opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`}
      _hover={{ borderColor: "rgba(124,106,247,0.35)", boxShadow: "0 8px 40px rgba(124,106,247,0.08)" }}
    >
      <Text fontSize="26px" mb={4}>{icon}</Text>
      <Text fontFamily="'ClashDisplay', sans-serif" fontSize="15px" fontWeight={600} color="brand.text" mb={4} letterSpacing="-0.3px">
        {name}
      </Text>
      <Wrap spacing={2}>
        {items.map((item) => (
          <WrapItem key={item}>
            <Box
              bg="brand.bg3" border="1px solid" borderColor="brand.border"
              borderRadius="6px" px={3} py="3px"
              fontFamily="mono" fontSize="11px" color="brand.text2"
            >
              {item}
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default function Skills() {
  const [ref, vis] = useReveal();

  return (
    <Box as="section" id="skills" py="100px" px={{ base: "20px", md: "48px" }}>
      <Box maxW="1100px" mx="auto">
        <HStack spacing={2} mb={4}
          ref={ref}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease, transform 0.65s ease"
        >
          <Text fontFamily="mono" fontSize="11px" color="brand.text3">//</Text>
          <Text fontFamily="mono" fontSize="11px" fontWeight={500} color="brand.accent" letterSpacing="2px" textTransform="uppercase">
            Tech stack
          </Text>
        </HStack>

        <Text
          fontFamily="'ClashDisplay', sans-serif"
          fontSize={{ base: "30px", md: "42px" }}
          fontWeight={700} color="brand.text"
          letterSpacing="-1.5px" lineHeight={1.1} mb={4}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s"
        >
          What I work with
        </Text>

        <Text fontSize="17px" color="brand.text2" maxW="520px" lineHeight={1.75} mb={14}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s"
        >
          A toolkit built over 4+ years of real-world projects — from fast MVPs to large-scale production systems.
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
          {skills.map((s, i) => (
            <SkillCard key={s.name} {...s} delay={`${i * 0.08}s`} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
