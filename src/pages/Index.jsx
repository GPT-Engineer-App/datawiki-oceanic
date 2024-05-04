import { Box, Container, Flex, Heading, Image, Input, Select, SimpleGrid, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data-analysis" element={<DataAnalysisPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/collaborate" element={<CollaboratePage />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="4xl" fontFamily="Bebas Neue">
            DataWiki
          </Heading>
          <Text mt={4} fontSize="xl" fontFamily="Bebas Neue">
            Your ultimate data analysis toolkit
          </Text>
          <Image src="https://images.unsplash.com/photo-1488229297570-58520851e868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDB8fHx8MTcxNDg1MjExMHww&ixlib=rb-4.0.3&q=80&w=1080" mt={6} />
        </Box>
        <VStack spacing={6} align="stretch">
          <Text fontSize="2xl" fontFamily="Bebas Neue" visibility="hidden">
            Benefits of DataWiki
          </Text>
          <Text fontSize="lg" fontFamily="Bebas Neue">
            Efficient Data Handling
          </Text>
          <Text fontSize="lg" fontFamily="Bebas Neue">
            Advanced Analytical Tools
          </Text>
          <Text fontSize="lg" fontFamily="Bebas Neue">
            User-Friendly Interface
          </Text>
        </VStack>
        <Box>
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            Data Analysis for Beginners
          </Text>
          <Text fontSize="lg" fontFamily="Bebas Neue">
            Learn the basics of data analysis and how to apply them using DataWiki.
          </Text>
          <Image src="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGRhdGElMjBhbmFseXNpcyUyMGJlZ2lubmVyfGVufDB8fHx8MTcxNDg1NDI3NHww&ixlib=rb-4.0.3&q=80&w=1080" mt={4} />
        </Box>
      </VStack>
    </Container>
  );
};

const DataAnalysisPage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <Flex gap={8}>
        <Box flex="1">
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            Upload Your Data
          </Text>
          <Input placeholder="Upload file" size="lg" fontFamily="Bebas Neue" rightIcon={<FaUpload />} />
          <Select placeholder="Select analysis operation" mt={4} fontFamily="Bebas Neue">
            <option value="regression">Regression Analysis</option>
            <option value="classification">Classification</option>
            <option value="clustering">Clustering</option>
          </Select>
        </Box>
        <Box flex="1">
          <Text fontSize="2xl" fontFamily="Bebas Neue">
            About Analysis Operations
          </Text>
          <Text fontSize="lg" fontFamily="Bebas Neue">
            Choose an operation to perform on your data and get insights instantly.
          </Text>
          <Text fontSize="lg" fontFamily="Bebas Neue" mt={4}>
            If you encounter any issues, please refer to our troubleshooting guide or contact support.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

const AboutUsPage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontFamily="Bebas Neue">
          About Us
        </Text>
        <Text fontSize="lg" fontFamily="Bebas Neue">
          DataWiki is dedicated to making data analysis accessible to everyone.
        </Text>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Text fontSize="lg" fontFamily="Bebas Neue">
              Our Mission
            </Text>
            <Text fontSize="md" fontFamily="Bebas Neue">
              To empower individuals and organizations by providing powerful and easy-to-use data analysis tools.
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontFamily="Bebas Neue">
              The Team
            </Text>
            <Text fontSize="md" fontFamily="Bebas Neue">
              Meet the incredible team behind DataWiki.
            </Text>
            <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB0ZWFtfGVufDB8fHx8MTcxNDg1NDI3NHww&ixlib=rb-4.0.3&q=80&w=1080" mt={4} />
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const CollaboratePage = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontFamily="Bebas Neue">
          Collaborate on DataWiki
        </Text>
        <Textarea placeholder="Write your article or describe your project here..." size="lg" fontFamily="Bebas Neue" minHeight="200px" />
        <Link to="/submit">Publish</Link>
      </VStack>
    </Container>
  );
};

export default Index;
