"use client";

import { Box, Text, HStack, VStack, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { experience } from "@/app/data/portfolio";
import { useReveal } from "@/app/components/useReveal";

function ExpRow({ exp, delay }: { exp: typeof experience[0]; delay: string }) {
  const [ref, vis] = useReveal();
  return (
    <Flex
      ref={ref}
      direction={{ base: "column", md: "row" }}
      gap={{ base: 2, md: 12 }}
      py={11} borderBottom="1px solid" borderColor="brand.border"
      _last={{ borderBottom: "none" }}
      opacity={vis ? 1 : 0}
      transform={vis ? "translateY(0)" : "translateY(28px)"}
      transition={`opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`}
    >
      {/* Left: period */}
      <Box flexShrink={0} w={{ base: "auto", md: "180px" }} pt={1}>
        <Text fontFamily="mono" fontSize="12px" color="brand.text3">{exp.period}</Text>
        <Text fontSize="11px" color="brand.text3" mt={1}>{exp.type}</Text>
      </Box>

      {/* Right: details */}
      <VStack align="flex-start" flex={1} spacing={3}>
        <Box
          display="inline-flex" alignItems="center" gap={2}
          bg="brand.accentGlow" border="1px solid" borderColor="rgba(124,106,247,0.2)"
          borderRadius="8px" px={3} py="4px"
          fontSize="12px" fontWeight={500} color="brand.accent2"
        >
          {exp.company}
        </Box>

        <Text
          fontFamily="'ClashDisplay', sans-serif"
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight={700} color="brand.text" letterSpacing="-0.5px"
        >
          {exp.role}
        </Text>

        <Text fontSize="14px" color="brand.text2" lineHeight={1.75}>
          {exp.blurb}
        </Text>

        <VStack align="flex-start" spacing={2} w="full">
          {exp.bullets.map((b, i) => (
            <HStack key={i} align="flex-start" spacing={3}>
              <Text color="brand.accent" fontSize="13px" flexShrink={0} mt="1px">→</Text>
              <Text fontSize="13px" color="brand.text2">{b}</Text>
            </HStack>
          ))}
        </VStack>

        <Wrap spacing={2} mt={2}>
          {exp.stack.map((s) => (
            <WrapItem key={s}>
              <Box
                bg="brand.bg3" border="1px solid" borderColor="brand.border"
                borderRadius="6px" px="10px" py="3px"
                fontFamily="mono" fontSize="11px" color="brand.text3"
              >
                {s}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Flex>
  );
}

export default function Experience() {
  const [ref, vis] = useReveal();

  return (
    <Box as="section" id="experience" py="100px" px={{ base: "20px", md: "48px" }}>
      <Box maxW="1100px" mx="auto">
        <HStack spacing={2} mb={4}
          ref={ref}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease, transform 0.65s ease"
        >
          <Text fontFamily="mono" fontSize="11px" color="brand.text3">//</Text>
          <Text fontFamily="mono" fontSize="11px" fontWeight={500} color="brand.accent" letterSpacing="2px" textTransform="uppercase">
            Career
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
          Where I&apos;ve worked
        </Text>

        <Text fontSize="17px" color="brand.text2" maxW="520px" lineHeight={1.75} mb={14}
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s"
        >
          4+ years of progressive responsibility — from building UIs to owning full product features.
        </Text>

        <Box>
          {experience.map((exp, i) => (
            <ExpRow key={exp.role} exp={exp} delay={`${i * 0.08}s`} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
