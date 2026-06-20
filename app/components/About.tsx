"use client";

import { Box, Flex, Text, VStack, HStack, Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { about } from "@/app/data/portfolio";
import { useReveal } from "@/app/components/useReveal";

export default function About() {
  const [ref1, vis1] = useReveal();
  const [ref2, vis2] = useReveal();

  return (
    <Box as="section" id="about" py="100px" px={{ base: "20px", md: "48px" }}>
      <Box maxW="1100px" mx="auto">
        <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 12, lg: 18 }} align="flex-start">

          {/* Visual */}
          <Box
            ref={ref1}
            display={{ base: "none", lg: "flex" }}
            flexShrink={0} w="380px"
            position="relative"
            opacity={vis1 ? 1 : 0}
            transform={vis1 ? "translateY(0)" : "translateY(28px)"}
            transition="opacity 0.65s ease, transform 0.65s ease"
          >
            <Flex
              bg="brand.bg1" border="1px solid" borderColor="brand.border"
              borderRadius="20px" w="full" aspectRatio="4/5"
              align="center" justify="center" fontSize="96px"
            >
              👨‍💻
            </Flex>
            {/* Float card */}
            <Box
              position="absolute" bottom="28px" left="-28px"
              bg="brand.bg2" border="1px solid" borderColor="brand.border2"
              borderRadius="14px" p={5}
              boxShadow="0 8px 32px rgba(0,0,0,0.4)"
            >
              <Text
                fontFamily="'ClashDisplay', sans-serif"
                fontSize="32px" fontWeight={700}
                color="brand.accent" letterSpacing="-1px"
              >
                4+
              </Text>
              <Text fontSize="11px" color="brand.text3" mt={1}>
                Years of experience
              </Text>
            </Box>
          </Box>

          {/* Text */}
          <VStack
            ref={ref2}
            align="flex-start" flex={1} spacing={5}
            opacity={vis2 ? 1 : 0}
            transform={vis2 ? "translateY(0)" : "translateY(28px)"}
            transition="opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s"
          >
            <HStack spacing={2}>
              <Text fontFamily="mono" fontSize="11px" color="brand.text3">//</Text>
              <Text fontFamily="mono" fontSize="11px" fontWeight={500} color="brand.accent" letterSpacing="2px" textTransform="uppercase">
                About me
              </Text>
            </HStack>

            <Text
              fontFamily="'ClashDisplay', sans-serif"
              fontSize={{ base: "30px", md: "42px" }}
              fontWeight={700} color="brand.text"
              letterSpacing="-1.5px" lineHeight={1.1}
            >
              I turn ideas into production-ready products
            </Text>

            {about.paragraphs.map((p, i) => (
              <Text key={i} fontSize="16px" color="brand.text2" lineHeight={1.85}>
                {p}
              </Text>
            ))}

            <Wrap spacing={2} mt={3}>
              {about.tags.map((tag) => (
                <WrapItem key={tag}>
                  <Tag
                    bg="brand.bg3" border="1px solid" borderColor="brand.border2"
                    borderRadius="full" px={4} py="5px"
                    fontSize="12px" fontWeight={500} color="brand.text2"
                  >
                    {tag}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
