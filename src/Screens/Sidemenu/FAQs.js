//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Color from '../../Global/Color';
import { scr_width } from '../../Utils/Dimensions';
import { Media } from '../../Global/Media';
import { Manrope } from '../../Global/FontFamily';
import { Iconviewcomponent } from '../../Components/Icontag';

// create a component
const FAQs = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: scr_width }}>
                    <Image
                        source={{ uri: Media.privacy }}
                        style={{
                            width: scr_width,
                            height: 180, resizeMode: 'contain'
                        }}
                    />
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>1. How can I track my order?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Please click the ‘Track my order’ option under the My Account Menu of the Website/App to check the status of your order.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>2. How can I check the delivery options to my location?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>You can verify the delivery availability by entering your Pincode in the menu on the product page.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>3. Are the coupons valid? How can I redeem them?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>You can get coupons based on the product you purchase. Please tap the ‘Coupons’ option under the My Account Menu of the Website/App to claim your coupon.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>4. Does ShopEasey deliver products outside India?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Yes, ShopEasey delivers products in countries like Singapore and Malaysia.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>5. What is the Cancellation Policy of ShopEasey?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>You can cancel the ordered product as long as the option for cancellation is available on the website/App. Your amount will be refunded through the same mode of payment made.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>6. How can I modify my shipping address?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>You can edit the delivery address of your order under the ‘Change address’ option. You can find the option under the ‘My Account’ Option.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>7. What kind of products are available on ShopEasey?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>ShopEasey includes a lineup of products from categories like Clothing, Appliances, Organic items, Pooja items, traditional frames, snacks, stationeries, and Silverware. We also include authentic products from trusted homemade dealers.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>8. Are the products listed on ShopEasey genuine?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Yes absolutely, ShopEasey includes products from reputed brands like Jack & Jones, Butterfly, V-Guard, Preethi, and Louis Vuitton to provide high-quality products to our genuine buyers.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>9. What are the benefits of selling my products through ShopEasey as a vendor?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>As a product manufacturer/dealer, you can cherish great benefits with ShopEasey.Com.We help you sell your products overseas with no commission & shipping charge. You can easily make a wide range of consumers buy your products.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>10. Do you offer product reviews?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Yes, you may read millions of consumer reviews provided on our website. Our customer reviews can provide you with more details regarding the functionality and quality of products.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>11. What happens if the customer does not accept the order at the time of delivery?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>The quantity of products, the distance, and the delivery date are used to determine the delivery charges.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>12. How do delivery fees get determined?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>The quantity of products, the distance, and the delivery date are used to determine the delivery charges.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>13. What happens if the recipient is unavailable when the delivery is made?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>The delivery partner will attempt a second delivery on the next business day if the customer is away for the delivery.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>14. How can I edit or modify my bank accounts?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Your bank account information is editable under the ‘My Account’ tab.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>15. Where can I find the details of my bank account and billing address?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>You can check the information available under the ‘My Account’ tab.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>16. When can I expect my refund?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Refunds for items canceled before shipment are handled right away. Once the delivery partner acknowledges the return of the item or items, the reimbursement will be handled if the purchase has been dispatched and delivered.</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>If in the unlikely event, the amount is not credited by the scheduled date, you can click the 'Help Centre’ option on our website to contact our customer care team with any questions or concerns.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>17. The right amount of my refund has not been issued. How should I proceed?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Please use the 'Need Help' button on our website to contact our customer support team with any questions or concerns you may have if you don't receive the appropriate amount.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>18. Does ShopEasey impose GST on placed orders?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>All product prices on ShopEasey include GST.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>19. What is ShopEasey's Return Policy?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>Before completing an order, please be sure to review the product listing page's amended Returns Policy. For further details regarding ShopEasey's Returns Policy, check our website.</Text>
                    </View>

                    <View style={{ width: '95%' }}>
                        <Text style={{ paddingHorizontal: 20, fontSize: 16, color: Color.lightBlack, fontFamily: Manrope.SemiBold, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 20, paddingVertical: 10 }}>20. What are the methods available for payments?</Text>
                        <Text style={{ paddingHorizontal: 20, fontSize: 14, color: Color.cloudyGrey, fontFamily: Manrope.Medium, letterSpacing: 0.5, textAlign: 'justify', lineHeight: 25 }}>For orders placed through the app, ShopEasey provides a variety of payment options. This comprises:</Text>
                    </View>

                    <View style={{ width: '85%', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={20}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 13, color: Color.cloudyGrey, fontFamily: Manrope.Regular, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22 }}>Cash on Delivery (COD)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={20}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 13, color: Color.cloudyGrey, fontFamily: Manrope.Regular, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22 }}>Debit/Credit card</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={20}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 13, color: Color.cloudyGrey, fontFamily: Manrope.Regular, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22 }}>Net Banking</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={20}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 13, color: Color.cloudyGrey, fontFamily: Manrope.Regular, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22 }}>Digital Wallets (PhonePe and Paytm)</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <Iconviewcomponent
                                Icontag={'AntDesign'}
                                iconname={'checkcircle'}
                                icon_size={20}
                                icon_color={Color.primary}
                                iconstyle={{ marginTop: 0 }}
                            />
                            <Text style={{ width: '100%', paddingHorizontal: 10, fontSize: 13, color: Color.cloudyGrey, fontFamily: Manrope.Regular, textAlign: 'justify', letterSpacing: 0.5, lineHeight: 22 }}>UPI (PhonePe, Google Pay, Paytm)</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.white,
    },
});

//make this component available to the app
export default FAQs;
