import Image from "next/image";
import { FeatureContainer, FeatureText, FeatureTitle, FeaturesGridContainer } from "./FeaturesGrid.styles";

export const FeaturesGrid = ({ extended }) => {
    return (
        <FeaturesGridContainer>
            <FeatureContainer>
                <Image src='/assets/features/desktop/responsive.svg' alt="Responsive" width={72} height={72} />
                <FeatureTitle>100% Responsive</FeatureTitle>
                <FeatureText>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</FeatureText>
            </FeatureContainer>
            <FeatureContainer>
                <Image src='/assets/features/desktop/no-limit.svg' alt="No limit" width={72} height={72} />
                <FeatureTitle>No Photo Upload Limit</FeatureTitle>
                <FeatureText>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</FeatureText>
            </FeatureContainer>
            <FeatureContainer>
                <Image src='/assets/features/desktop/embed.svg' alt="Embed" width={72} height={72} />
                <FeatureTitle>Available to Embed</FeatureTitle>
                <FeatureText>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </FeatureText>
            </FeatureContainer>
            {
                extended && <>
                    <FeatureContainer>
                        <Image src='/assets/features/desktop/custom-domain.svg' alt="Custom Domain" width={72} height={72} />
                        <FeatureTitle>Custom Domain</FeatureTitle>
                        <FeatureText>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</FeatureText>
                    </FeatureContainer>
                    <FeatureContainer>
                        <Image src='/assets/features/desktop/boost-exposure.svg' alt="Drag and Drop" width={72} height={72} />
                        <FeatureTitle>Boost Your Exposure</FeatureTitle>
                        <FeatureText>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</FeatureText>
                    </FeatureContainer>
                    <FeatureContainer>
                        <Image src='/assets/features/desktop/drag-drop.svg' alt="Drag and Drop" width={72} height={72} />
                        <FeatureTitle>Drag & Drop Image</FeatureTitle>
                        <FeatureText>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</FeatureText>
                    </FeatureContainer>
                </>
            }
        </FeaturesGridContainer>
    );
};