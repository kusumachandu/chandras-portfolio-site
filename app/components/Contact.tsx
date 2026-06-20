"use client";

import {
  Box, Flex, Text, VStack, HStack, Link, Input, Textarea, Button,
} from "@chakra-ui/react";
import { meta } from "@/app/data/portfolio";
import { useReveal } from "@/app/components/useReveal";

const contactLinks = [
  { icon: "✉️", label: meta.email,                    href: `mailto:${meta.email}` },
  { icon: "💼", label: "linkedin.com/in/chandrashekar", href: meta.linkedin        },
  { icon: "🐙", label: "github.com/chandrashekar",     href: meta.github           },
  { icon: "📄", label: "Download resume",               href: meta.resume           },
];

const inputStyles = {
  bg: "brand.bg3",
  border: "1px solid",
  borderColor: "brand.border",
  borderRadius: "10px",
  color: "brand.text",
  fontSize: "14px",
  _placeholder: { color: "brand.text3" },
  _focus: { borderColor: "rgba(124,106,247,0.4)", boxShadow: "none" },
  _hover: { borderColor: "brand.border2" },
};

export default function Contact() {
  const [ref, vis] = useReveal();

  return (
    <Box as="section" id="contact" py="100px" px={{ base: "20px", md: "48px" }} pb="120px">
      <Box maxW="1100px" mx="auto">
        <Box
          ref={ref}
          bg="brand.bg1" border="1px solid" borderColor="brand.border2"
          borderRadius="24px" p={{ base: 8, md: 16 }}
          position="relative" overflow="hidden"
          opacity={vis ? 1 : 0}
          transform={vis ? "translateY(0)" : "translateY(28px)"}
          transition="opacity 0.65s ease, transform 0.65s ease"
        >
          {/* Glow */}
          <Box
            position="absolute" w="500px" h="500px" borderRadius="50%"
            bg="brand.accent" opacity={0.04} filter="blur(100px)"
            top="-200px" left="-100px" pointerEvents="none"
          />

          <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 10, lg: 16 }} align="flex-start">
            {/* Left */}
            <VStack align="flex-start" flex={1} spacing={5}>
              <Text
                fontFamily="'ClashDisplay', sans-serif"
                fontSize={{ base: "28px", md: "42px" }}
                fontWeight={700} color="brand.text"
                letterSpacing="-1.5px" lineHeight={1.05}
              >
                Let&apos;s build something{" "}
                <Text as="span" color="brand.accent2">great</Text>{" "}
                together
              </Text>

              <Text fontSize="15px" color="brand.text2" lineHeight={1.75}>
                Open to full-time roles, freelance projects, and consulting. Response within 24 hours.
              </Text>

              <VStack align="flex-start" spacing={4} w="full" mt={2}>
                {contactLinks.map((c) => (
                  <Link
                    key={c.label} href={c.href}
                    isExternal={c.href.startsWith("http")}
                    display="flex" alignItems="center" gap={3}
                    color="brand.text2" fontSize="14px"
                    _hover={{ color: "brand.text", textDecoration: "none" }}
                    transition="color 0.2s"
                    role="group"
                  >
                    <Flex
                      w="36px" h="36px" borderRadius="8px" flexShrink={0}
                      bg="brand.bg3" border="1px solid" borderColor="brand.border"
                      align="center" justify="center" fontSize="15px"
                      transition="background 0.2s, border-color 0.2s"
                      _groupHover={{ bg: "brand.accentGlow", borderColor: "rgba(124,106,247,0.35)" }}
                    >
                      {c.icon}
                    </Flex>
                    {c.label}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* Right: form */}
            <VStack flex={1} spacing={3} w="full">
              <Input placeholder="Your name" {...inputStyles} />
              <Input placeholder="Your email" type="email" {...inputStyles} />
              <Input placeholder="What are you building?" {...inputStyles} />
              <Textarea
                placeholder="Tell me about your project..."
                h="120px" resize="none"
                {...inputStyles}
              />
              <Button
                variant="accent" w="full" size="lg"
                fontSize="14px" fontWeight={500}
              >
                Send message →
              </Button>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
