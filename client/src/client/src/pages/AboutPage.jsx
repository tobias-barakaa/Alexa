// BlogPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import './BlogPage.css';

// Import your blog post images
import blogImage1 from './images/blog-image1.jpg';
import blogImage2 from './images/blog-image2.jpg';

const BlogPage = () => {
  return (
    <Container>
      <StyledBlogSection>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <BlogPost>
              <BlogImage>
                <img src={blogImage1} alt="Blog Post 1" />
              </BlogImage>
              <BlogContent>
                <BlogTitle>Crafting Captivating Articles for Your Audience</BlogTitle>
                <BlogText>
                  In this blog post, we'll explore the art of writing engaging and informative articles that captivate your readers. Learn the key strategies to make your content shine and leave a lasting impression.
                </BlogText>
              </BlogContent>
            </BlogPost>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <BlogPost>
              <BlogImage>
                <img src={blogImage2} alt="Blog Post 2" />
              </BlogImage>
              <BlogContent>
                <BlogTitle>Crafting the Perfect CV: Tips and Tricks</BlogTitle>
                <BlogText>
                  Crafting the perfect CV can be a daunting task, but with the right approach, you can create a document that showcases your skills and experience in the best light. In this post, we'll share expert tips to help you stand out.
                </BlogText>
              </BlogContent>
            </BlogPost>
          </Col>
        </Row>
      </StyledBlogSection>
    </Container>
  );
};

export default BlogPage;