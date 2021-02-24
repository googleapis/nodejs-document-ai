// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace documentai. */
        namespace documentai {

            /** Namespace v1beta2. */
            namespace v1beta2 {

                /** Properties of a Document. */
                interface IDocument {

                    /** Document uri */
                    uri?: (string|null);

                    /** Document content */
                    content?: (Uint8Array|string|null);

                    /** Document mimeType */
                    mimeType?: (string|null);

                    /** Document text */
                    text?: (string|null);

                    /** Document textStyles */
                    textStyles?: (google.cloud.documentai.v1beta2.Document.IStyle[]|null);

                    /** Document pages */
                    pages?: (google.cloud.documentai.v1beta2.Document.IPage[]|null);

                    /** Document entities */
                    entities?: (google.cloud.documentai.v1beta2.Document.IEntity[]|null);

                    /** Document entityRelations */
                    entityRelations?: (google.cloud.documentai.v1beta2.Document.IEntityRelation[]|null);

                    /** Document shardInfo */
                    shardInfo?: (google.cloud.documentai.v1beta2.Document.IShardInfo|null);

                    /** Document labels */
                    labels?: (google.cloud.documentai.v1beta2.Document.ILabel[]|null);

                    /** Document error */
                    error?: (google.rpc.IStatus|null);
                }

                /** Represents a Document. */
                class Document implements IDocument {

                    /**
                     * Constructs a new Document.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IDocument);

                    /** Document uri. */
                    public uri: string;

                    /** Document content. */
                    public content: (Uint8Array|string);

                    /** Document mimeType. */
                    public mimeType: string;

                    /** Document text. */
                    public text: string;

                    /** Document textStyles. */
                    public textStyles: google.cloud.documentai.v1beta2.Document.IStyle[];

                    /** Document pages. */
                    public pages: google.cloud.documentai.v1beta2.Document.IPage[];

                    /** Document entities. */
                    public entities: google.cloud.documentai.v1beta2.Document.IEntity[];

                    /** Document entityRelations. */
                    public entityRelations: google.cloud.documentai.v1beta2.Document.IEntityRelation[];

                    /** Document shardInfo. */
                    public shardInfo?: (google.cloud.documentai.v1beta2.Document.IShardInfo|null);

                    /** Document labels. */
                    public labels: google.cloud.documentai.v1beta2.Document.ILabel[];

                    /** Document error. */
                    public error?: (google.rpc.IStatus|null);

                    /** Document source. */
                    public source?: ("uri"|"content");

                    /**
                     * Creates a new Document instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Document instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IDocument): google.cloud.documentai.v1beta2.Document;

                    /**
                     * Encodes the specified Document message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Document message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Document message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document;

                    /**
                     * Decodes a Document message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document;

                    /**
                     * Verifies a Document message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Document message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Document
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document;

                    /**
                     * Creates a plain object from a Document message. Also converts values to other types if specified.
                     * @param message Document
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Document to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Document {

                    /** Properties of a ShardInfo. */
                    interface IShardInfo {

                        /** ShardInfo shardIndex */
                        shardIndex?: (number|Long|string|null);

                        /** ShardInfo shardCount */
                        shardCount?: (number|Long|string|null);

                        /** ShardInfo textOffset */
                        textOffset?: (number|Long|string|null);
                    }

                    /** Represents a ShardInfo. */
                    class ShardInfo implements IShardInfo {

                        /**
                         * Constructs a new ShardInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.IShardInfo);

                        /** ShardInfo shardIndex. */
                        public shardIndex: (number|Long|string);

                        /** ShardInfo shardCount. */
                        public shardCount: (number|Long|string);

                        /** ShardInfo textOffset. */
                        public textOffset: (number|Long|string);

                        /**
                         * Creates a new ShardInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShardInfo instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.IShardInfo): google.cloud.documentai.v1beta2.Document.ShardInfo;

                        /**
                         * Encodes the specified ShardInfo message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.ShardInfo.verify|verify} messages.
                         * @param message ShardInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.IShardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShardInfo message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.ShardInfo.verify|verify} messages.
                         * @param message ShardInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.IShardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShardInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShardInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.ShardInfo;

                        /**
                         * Decodes a ShardInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShardInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.ShardInfo;

                        /**
                         * Verifies a ShardInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShardInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShardInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.ShardInfo;

                        /**
                         * Creates a plain object from a ShardInfo message. Also converts values to other types if specified.
                         * @param message ShardInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.ShardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShardInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Label. */
                    interface ILabel {

                        /** Label automlModel */
                        automlModel?: (string|null);

                        /** Label name */
                        name?: (string|null);

                        /** Label confidence */
                        confidence?: (number|null);
                    }

                    /** Represents a Label. */
                    class Label implements ILabel {

                        /**
                         * Constructs a new Label.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.ILabel);

                        /** Label automlModel. */
                        public automlModel: string;

                        /** Label name. */
                        public name: string;

                        /** Label confidence. */
                        public confidence: number;

                        /** Label source. */
                        public source?: "automlModel";

                        /**
                         * Creates a new Label instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Label instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.ILabel): google.cloud.documentai.v1beta2.Document.Label;

                        /**
                         * Encodes the specified Label message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Label.verify|verify} messages.
                         * @param message Label message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Label message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Label.verify|verify} messages.
                         * @param message Label message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Label message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Label
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Label;

                        /**
                         * Decodes a Label message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Label
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Label;

                        /**
                         * Verifies a Label message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Label message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Label
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Label;

                        /**
                         * Creates a plain object from a Label message. Also converts values to other types if specified.
                         * @param message Label
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.Label, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Label to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Style. */
                    interface IStyle {

                        /** Style textAnchor */
                        textAnchor?: (google.cloud.documentai.v1beta2.Document.ITextAnchor|null);

                        /** Style color */
                        color?: (google.type.IColor|null);

                        /** Style backgroundColor */
                        backgroundColor?: (google.type.IColor|null);

                        /** Style fontWeight */
                        fontWeight?: (string|null);

                        /** Style textStyle */
                        textStyle?: (string|null);

                        /** Style textDecoration */
                        textDecoration?: (string|null);

                        /** Style fontSize */
                        fontSize?: (google.cloud.documentai.v1beta2.Document.Style.IFontSize|null);
                    }

                    /** Represents a Style. */
                    class Style implements IStyle {

                        /**
                         * Constructs a new Style.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.IStyle);

                        /** Style textAnchor. */
                        public textAnchor?: (google.cloud.documentai.v1beta2.Document.ITextAnchor|null);

                        /** Style color. */
                        public color?: (google.type.IColor|null);

                        /** Style backgroundColor. */
                        public backgroundColor?: (google.type.IColor|null);

                        /** Style fontWeight. */
                        public fontWeight: string;

                        /** Style textStyle. */
                        public textStyle: string;

                        /** Style textDecoration. */
                        public textDecoration: string;

                        /** Style fontSize. */
                        public fontSize?: (google.cloud.documentai.v1beta2.Document.Style.IFontSize|null);

                        /**
                         * Creates a new Style instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Style instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.IStyle): google.cloud.documentai.v1beta2.Document.Style;

                        /**
                         * Encodes the specified Style message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Style.verify|verify} messages.
                         * @param message Style message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.IStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Style message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Style.verify|verify} messages.
                         * @param message Style message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.IStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Style message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Style
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Style;

                        /**
                         * Decodes a Style message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Style
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Style;

                        /**
                         * Verifies a Style message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Style message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Style
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Style;

                        /**
                         * Creates a plain object from a Style message. Also converts values to other types if specified.
                         * @param message Style
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.Style, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Style to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Style {

                        /** Properties of a FontSize. */
                        interface IFontSize {

                            /** FontSize size */
                            size?: (number|null);

                            /** FontSize unit */
                            unit?: (string|null);
                        }

                        /** Represents a FontSize. */
                        class FontSize implements IFontSize {

                            /**
                             * Constructs a new FontSize.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Style.IFontSize);

                            /** FontSize size. */
                            public size: number;

                            /** FontSize unit. */
                            public unit: string;

                            /**
                             * Creates a new FontSize instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FontSize instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Style.IFontSize): google.cloud.documentai.v1beta2.Document.Style.FontSize;

                            /**
                             * Encodes the specified FontSize message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Style.FontSize.verify|verify} messages.
                             * @param message FontSize message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Style.IFontSize, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FontSize message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Style.FontSize.verify|verify} messages.
                             * @param message FontSize message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Style.IFontSize, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FontSize message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FontSize
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Style.FontSize;

                            /**
                             * Decodes a FontSize message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FontSize
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Style.FontSize;

                            /**
                             * Verifies a FontSize message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FontSize message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FontSize
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Style.FontSize;

                            /**
                             * Creates a plain object from a FontSize message. Also converts values to other types if specified.
                             * @param message FontSize
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Style.FontSize, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FontSize to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Page. */
                    interface IPage {

                        /** Page pageNumber */
                        pageNumber?: (number|null);

                        /** Page dimension */
                        dimension?: (google.cloud.documentai.v1beta2.Document.Page.IDimension|null);

                        /** Page layout */
                        layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                        /** Page detectedLanguages */
                        detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);

                        /** Page blocks */
                        blocks?: (google.cloud.documentai.v1beta2.Document.Page.IBlock[]|null);

                        /** Page paragraphs */
                        paragraphs?: (google.cloud.documentai.v1beta2.Document.Page.IParagraph[]|null);

                        /** Page lines */
                        lines?: (google.cloud.documentai.v1beta2.Document.Page.ILine[]|null);

                        /** Page tokens */
                        tokens?: (google.cloud.documentai.v1beta2.Document.Page.IToken[]|null);

                        /** Page visualElements */
                        visualElements?: (google.cloud.documentai.v1beta2.Document.Page.IVisualElement[]|null);

                        /** Page tables */
                        tables?: (google.cloud.documentai.v1beta2.Document.Page.ITable[]|null);

                        /** Page formFields */
                        formFields?: (google.cloud.documentai.v1beta2.Document.Page.IFormField[]|null);
                    }

                    /** Represents a Page. */
                    class Page implements IPage {

                        /**
                         * Constructs a new Page.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.IPage);

                        /** Page pageNumber. */
                        public pageNumber: number;

                        /** Page dimension. */
                        public dimension?: (google.cloud.documentai.v1beta2.Document.Page.IDimension|null);

                        /** Page layout. */
                        public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                        /** Page detectedLanguages. */
                        public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                        /** Page blocks. */
                        public blocks: google.cloud.documentai.v1beta2.Document.Page.IBlock[];

                        /** Page paragraphs. */
                        public paragraphs: google.cloud.documentai.v1beta2.Document.Page.IParagraph[];

                        /** Page lines. */
                        public lines: google.cloud.documentai.v1beta2.Document.Page.ILine[];

                        /** Page tokens. */
                        public tokens: google.cloud.documentai.v1beta2.Document.Page.IToken[];

                        /** Page visualElements. */
                        public visualElements: google.cloud.documentai.v1beta2.Document.Page.IVisualElement[];

                        /** Page tables. */
                        public tables: google.cloud.documentai.v1beta2.Document.Page.ITable[];

                        /** Page formFields. */
                        public formFields: google.cloud.documentai.v1beta2.Document.Page.IFormField[];

                        /**
                         * Creates a new Page instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Page instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.IPage): google.cloud.documentai.v1beta2.Document.Page;

                        /**
                         * Encodes the specified Page message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.verify|verify} messages.
                         * @param message Page message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Page message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.verify|verify} messages.
                         * @param message Page message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Page message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Page
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page;

                        /**
                         * Decodes a Page message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Page
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page;

                        /**
                         * Verifies a Page message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Page message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Page
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page;

                        /**
                         * Creates a plain object from a Page message. Also converts values to other types if specified.
                         * @param message Page
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Page to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Page {

                        /** Properties of a Dimension. */
                        interface IDimension {

                            /** Dimension width */
                            width?: (number|null);

                            /** Dimension height */
                            height?: (number|null);

                            /** Dimension unit */
                            unit?: (string|null);
                        }

                        /** Represents a Dimension. */
                        class Dimension implements IDimension {

                            /**
                             * Constructs a new Dimension.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IDimension);

                            /** Dimension width. */
                            public width: number;

                            /** Dimension height. */
                            public height: number;

                            /** Dimension unit. */
                            public unit: string;

                            /**
                             * Creates a new Dimension instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Dimension instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IDimension): google.cloud.documentai.v1beta2.Document.Page.Dimension;

                            /**
                             * Encodes the specified Dimension message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Dimension.verify|verify} messages.
                             * @param message Dimension message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Dimension message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Dimension.verify|verify} messages.
                             * @param message Dimension message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Dimension message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Dimension
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Dimension;

                            /**
                             * Decodes a Dimension message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Dimension
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Dimension;

                            /**
                             * Verifies a Dimension message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Dimension
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Dimension;

                            /**
                             * Creates a plain object from a Dimension message. Also converts values to other types if specified.
                             * @param message Dimension
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Dimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Dimension to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Layout. */
                        interface ILayout {

                            /** Layout textAnchor */
                            textAnchor?: (google.cloud.documentai.v1beta2.Document.ITextAnchor|null);

                            /** Layout confidence */
                            confidence?: (number|null);

                            /** Layout boundingPoly */
                            boundingPoly?: (google.cloud.documentai.v1beta2.IBoundingPoly|null);

                            /** Layout orientation */
                            orientation?: (google.cloud.documentai.v1beta2.Document.Page.Layout.Orientation|keyof typeof google.cloud.documentai.v1beta2.Document.Page.Layout.Orientation|null);

                            /** Layout id */
                            id?: (string|null);
                        }

                        /** Represents a Layout. */
                        class Layout implements ILayout {

                            /**
                             * Constructs a new Layout.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.ILayout);

                            /** Layout textAnchor. */
                            public textAnchor?: (google.cloud.documentai.v1beta2.Document.ITextAnchor|null);

                            /** Layout confidence. */
                            public confidence: number;

                            /** Layout boundingPoly. */
                            public boundingPoly?: (google.cloud.documentai.v1beta2.IBoundingPoly|null);

                            /** Layout orientation. */
                            public orientation: (google.cloud.documentai.v1beta2.Document.Page.Layout.Orientation|keyof typeof google.cloud.documentai.v1beta2.Document.Page.Layout.Orientation);

                            /** Layout id. */
                            public id: string;

                            /**
                             * Creates a new Layout instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Layout instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.ILayout): google.cloud.documentai.v1beta2.Document.Page.Layout;

                            /**
                             * Encodes the specified Layout message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Layout.verify|verify} messages.
                             * @param message Layout message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.ILayout, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Layout message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Layout.verify|verify} messages.
                             * @param message Layout message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.ILayout, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Layout message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Layout
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Layout;

                            /**
                             * Decodes a Layout message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Layout
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Layout;

                            /**
                             * Verifies a Layout message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Layout message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Layout
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Layout;

                            /**
                             * Creates a plain object from a Layout message. Also converts values to other types if specified.
                             * @param message Layout
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Layout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Layout to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Layout {

                            /** Orientation enum. */
                            enum Orientation {
                                ORIENTATION_UNSPECIFIED = 0,
                                PAGE_UP = 1,
                                PAGE_RIGHT = 2,
                                PAGE_DOWN = 3,
                                PAGE_LEFT = 4
                            }
                        }

                        /** Properties of a Block. */
                        interface IBlock {

                            /** Block layout */
                            layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Block detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a Block. */
                        class Block implements IBlock {

                            /**
                             * Constructs a new Block.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IBlock);

                            /** Block layout. */
                            public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Block detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new Block instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Block instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IBlock): google.cloud.documentai.v1beta2.Document.Page.Block;

                            /**
                             * Encodes the specified Block message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Block.verify|verify} messages.
                             * @param message Block message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Block message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Block.verify|verify} messages.
                             * @param message Block message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Block message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Block
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Block;

                            /**
                             * Decodes a Block message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Block
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Block;

                            /**
                             * Verifies a Block message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Block message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Block
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Block;

                            /**
                             * Creates a plain object from a Block message. Also converts values to other types if specified.
                             * @param message Block
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Block to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Paragraph. */
                        interface IParagraph {

                            /** Paragraph layout */
                            layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Paragraph detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a Paragraph. */
                        class Paragraph implements IParagraph {

                            /**
                             * Constructs a new Paragraph.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IParagraph);

                            /** Paragraph layout. */
                            public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Paragraph detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new Paragraph instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Paragraph instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IParagraph): google.cloud.documentai.v1beta2.Document.Page.Paragraph;

                            /**
                             * Encodes the specified Paragraph message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Paragraph.verify|verify} messages.
                             * @param message Paragraph message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Paragraph message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Paragraph.verify|verify} messages.
                             * @param message Paragraph message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Paragraph message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Paragraph
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Paragraph;

                            /**
                             * Decodes a Paragraph message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Paragraph
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Paragraph;

                            /**
                             * Verifies a Paragraph message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Paragraph message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Paragraph
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Paragraph;

                            /**
                             * Creates a plain object from a Paragraph message. Also converts values to other types if specified.
                             * @param message Paragraph
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Paragraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Paragraph to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Line. */
                        interface ILine {

                            /** Line layout */
                            layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Line detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a Line. */
                        class Line implements ILine {

                            /**
                             * Constructs a new Line.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.ILine);

                            /** Line layout. */
                            public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Line detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new Line instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Line instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.ILine): google.cloud.documentai.v1beta2.Document.Page.Line;

                            /**
                             * Encodes the specified Line message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Line.verify|verify} messages.
                             * @param message Line message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Line message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Line.verify|verify} messages.
                             * @param message Line message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Line message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Line
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Line;

                            /**
                             * Decodes a Line message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Line
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Line;

                            /**
                             * Verifies a Line message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Line message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Line
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Line;

                            /**
                             * Creates a plain object from a Line message. Also converts values to other types if specified.
                             * @param message Line
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Line, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Line to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Token. */
                        interface IToken {

                            /** Token layout */
                            layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Token detectedBreak */
                            detectedBreak?: (google.cloud.documentai.v1beta2.Document.Page.Token.IDetectedBreak|null);

                            /** Token detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a Token. */
                        class Token implements IToken {

                            /**
                             * Constructs a new Token.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IToken);

                            /** Token layout. */
                            public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Token detectedBreak. */
                            public detectedBreak?: (google.cloud.documentai.v1beta2.Document.Page.Token.IDetectedBreak|null);

                            /** Token detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new Token instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Token instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IToken): google.cloud.documentai.v1beta2.Document.Page.Token;

                            /**
                             * Encodes the specified Token message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Token.verify|verify} messages.
                             * @param message Token message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Token message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Token.verify|verify} messages.
                             * @param message Token message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Token message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Token
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Token;

                            /**
                             * Decodes a Token message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Token
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Token;

                            /**
                             * Verifies a Token message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Token message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Token
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Token;

                            /**
                             * Creates a plain object from a Token message. Also converts values to other types if specified.
                             * @param message Token
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Token to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Token {

                            /** Properties of a DetectedBreak. */
                            interface IDetectedBreak {

                                /** DetectedBreak type */
                                type?: (google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak.Type|keyof typeof google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak.Type|null);
                            }

                            /** Represents a DetectedBreak. */
                            class DetectedBreak implements IDetectedBreak {

                                /**
                                 * Constructs a new DetectedBreak.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.Token.IDetectedBreak);

                                /** DetectedBreak type. */
                                public type: (google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak.Type|keyof typeof google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak.Type);

                                /**
                                 * Creates a new DetectedBreak instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns DetectedBreak instance
                                 */
                                public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.Token.IDetectedBreak): google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak;

                                /**
                                 * Encodes the specified DetectedBreak message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak.verify|verify} messages.
                                 * @param message DetectedBreak message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.documentai.v1beta2.Document.Page.Token.IDetectedBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified DetectedBreak message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak.verify|verify} messages.
                                 * @param message DetectedBreak message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.Token.IDetectedBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a DetectedBreak message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns DetectedBreak
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak;

                                /**
                                 * Decodes a DetectedBreak message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns DetectedBreak
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak;

                                /**
                                 * Verifies a DetectedBreak message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a DetectedBreak message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns DetectedBreak
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak;

                                /**
                                 * Creates a plain object from a DetectedBreak message. Also converts values to other types if specified.
                                 * @param message DetectedBreak
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Token.DetectedBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this DetectedBreak to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            namespace DetectedBreak {

                                /** Type enum. */
                                enum Type {
                                    TYPE_UNSPECIFIED = 0,
                                    SPACE = 1,
                                    WIDE_SPACE = 2,
                                    HYPHEN = 3
                                }
                            }
                        }

                        /** Properties of a VisualElement. */
                        interface IVisualElement {

                            /** VisualElement layout */
                            layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** VisualElement type */
                            type?: (string|null);

                            /** VisualElement detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a VisualElement. */
                        class VisualElement implements IVisualElement {

                            /**
                             * Constructs a new VisualElement.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IVisualElement);

                            /** VisualElement layout. */
                            public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** VisualElement type. */
                            public type: string;

                            /** VisualElement detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new VisualElement instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns VisualElement instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IVisualElement): google.cloud.documentai.v1beta2.Document.Page.VisualElement;

                            /**
                             * Encodes the specified VisualElement message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.VisualElement.verify|verify} messages.
                             * @param message VisualElement message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IVisualElement, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified VisualElement message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.VisualElement.verify|verify} messages.
                             * @param message VisualElement message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IVisualElement, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a VisualElement message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns VisualElement
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.VisualElement;

                            /**
                             * Decodes a VisualElement message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns VisualElement
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.VisualElement;

                            /**
                             * Verifies a VisualElement message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a VisualElement message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns VisualElement
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.VisualElement;

                            /**
                             * Creates a plain object from a VisualElement message. Also converts values to other types if specified.
                             * @param message VisualElement
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.VisualElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this VisualElement to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Table. */
                        interface ITable {

                            /** Table layout */
                            layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Table headerRows */
                            headerRows?: (google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow[]|null);

                            /** Table bodyRows */
                            bodyRows?: (google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow[]|null);

                            /** Table detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a Table. */
                        class Table implements ITable {

                            /**
                             * Constructs a new Table.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.ITable);

                            /** Table layout. */
                            public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** Table headerRows. */
                            public headerRows: google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow[];

                            /** Table bodyRows. */
                            public bodyRows: google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow[];

                            /** Table detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new Table instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Table instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.ITable): google.cloud.documentai.v1beta2.Document.Page.Table;

                            /**
                             * Encodes the specified Table message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Table message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Table message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Table;

                            /**
                             * Decodes a Table message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Table;

                            /**
                             * Verifies a Table message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Table message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Table
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Table;

                            /**
                             * Creates a plain object from a Table message. Also converts values to other types if specified.
                             * @param message Table
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Table to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Table {

                            /** Properties of a TableRow. */
                            interface ITableRow {

                                /** TableRow cells */
                                cells?: (google.cloud.documentai.v1beta2.Document.Page.Table.ITableCell[]|null);
                            }

                            /** Represents a TableRow. */
                            class TableRow implements ITableRow {

                                /**
                                 * Constructs a new TableRow.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow);

                                /** TableRow cells. */
                                public cells: google.cloud.documentai.v1beta2.Document.Page.Table.ITableCell[];

                                /**
                                 * Creates a new TableRow instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns TableRow instance
                                 */
                                public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow): google.cloud.documentai.v1beta2.Document.Page.Table.TableRow;

                                /**
                                 * Encodes the specified TableRow message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Table.TableRow.verify|verify} messages.
                                 * @param message TableRow message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified TableRow message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Table.TableRow.verify|verify} messages.
                                 * @param message TableRow message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.Table.ITableRow, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a TableRow message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns TableRow
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Table.TableRow;

                                /**
                                 * Decodes a TableRow message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns TableRow
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Table.TableRow;

                                /**
                                 * Verifies a TableRow message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a TableRow message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns TableRow
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Table.TableRow;

                                /**
                                 * Creates a plain object from a TableRow message. Also converts values to other types if specified.
                                 * @param message TableRow
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Table.TableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this TableRow to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a TableCell. */
                            interface ITableCell {

                                /** TableCell layout */
                                layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                                /** TableCell rowSpan */
                                rowSpan?: (number|null);

                                /** TableCell colSpan */
                                colSpan?: (number|null);

                                /** TableCell detectedLanguages */
                                detectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);
                            }

                            /** Represents a TableCell. */
                            class TableCell implements ITableCell {

                                /**
                                 * Constructs a new TableCell.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.Table.ITableCell);

                                /** TableCell layout. */
                                public layout?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                                /** TableCell rowSpan. */
                                public rowSpan: number;

                                /** TableCell colSpan. */
                                public colSpan: number;

                                /** TableCell detectedLanguages. */
                                public detectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                                /**
                                 * Creates a new TableCell instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns TableCell instance
                                 */
                                public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.Table.ITableCell): google.cloud.documentai.v1beta2.Document.Page.Table.TableCell;

                                /**
                                 * Encodes the specified TableCell message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Table.TableCell.verify|verify} messages.
                                 * @param message TableCell message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.documentai.v1beta2.Document.Page.Table.ITableCell, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified TableCell message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.Table.TableCell.verify|verify} messages.
                                 * @param message TableCell message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.Table.ITableCell, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a TableCell message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns TableCell
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.Table.TableCell;

                                /**
                                 * Decodes a TableCell message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns TableCell
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.Table.TableCell;

                                /**
                                 * Verifies a TableCell message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a TableCell message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns TableCell
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.Table.TableCell;

                                /**
                                 * Creates a plain object from a TableCell message. Also converts values to other types if specified.
                                 * @param message TableCell
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.Table.TableCell, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this TableCell to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }

                        /** Properties of a FormField. */
                        interface IFormField {

                            /** FormField fieldName */
                            fieldName?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** FormField fieldValue */
                            fieldValue?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** FormField nameDetectedLanguages */
                            nameDetectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);

                            /** FormField valueDetectedLanguages */
                            valueDetectedLanguages?: (google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[]|null);

                            /** FormField valueType */
                            valueType?: (string|null);

                            /** FormField correctedKeyText */
                            correctedKeyText?: (string|null);

                            /** FormField correctedValueText */
                            correctedValueText?: (string|null);
                        }

                        /** Represents a FormField. */
                        class FormField implements IFormField {

                            /**
                             * Constructs a new FormField.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IFormField);

                            /** FormField fieldName. */
                            public fieldName?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** FormField fieldValue. */
                            public fieldValue?: (google.cloud.documentai.v1beta2.Document.Page.ILayout|null);

                            /** FormField nameDetectedLanguages. */
                            public nameDetectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /** FormField valueDetectedLanguages. */
                            public valueDetectedLanguages: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage[];

                            /** FormField valueType. */
                            public valueType: string;

                            /** FormField correctedKeyText. */
                            public correctedKeyText: string;

                            /** FormField correctedValueText. */
                            public correctedValueText: string;

                            /**
                             * Creates a new FormField instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FormField instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IFormField): google.cloud.documentai.v1beta2.Document.Page.FormField;

                            /**
                             * Encodes the specified FormField message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.FormField.verify|verify} messages.
                             * @param message FormField message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IFormField, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FormField message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.FormField.verify|verify} messages.
                             * @param message FormField message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IFormField, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FormField message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FormField
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.FormField;

                            /**
                             * Decodes a FormField message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FormField
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.FormField;

                            /**
                             * Verifies a FormField message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FormField message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FormField
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.FormField;

                            /**
                             * Creates a plain object from a FormField message. Also converts values to other types if specified.
                             * @param message FormField
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.FormField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FormField to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DetectedLanguage. */
                        interface IDetectedLanguage {

                            /** DetectedLanguage languageCode */
                            languageCode?: (string|null);

                            /** DetectedLanguage confidence */
                            confidence?: (number|null);
                        }

                        /** Represents a DetectedLanguage. */
                        class DetectedLanguage implements IDetectedLanguage {

                            /**
                             * Constructs a new DetectedLanguage.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage);

                            /** DetectedLanguage languageCode. */
                            public languageCode: string;

                            /** DetectedLanguage confidence. */
                            public confidence: number;

                            /**
                             * Creates a new DetectedLanguage instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DetectedLanguage instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage): google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage;

                            /**
                             * Encodes the specified DetectedLanguage message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage.verify|verify} messages.
                             * @param message DetectedLanguage message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DetectedLanguage message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage.verify|verify} messages.
                             * @param message DetectedLanguage message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.Page.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DetectedLanguage message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DetectedLanguage
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage;

                            /**
                             * Decodes a DetectedLanguage message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DetectedLanguage
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage;

                            /**
                             * Verifies a DetectedLanguage message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DetectedLanguage message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DetectedLanguage
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage;

                            /**
                             * Creates a plain object from a DetectedLanguage message. Also converts values to other types if specified.
                             * @param message DetectedLanguage
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.Page.DetectedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DetectedLanguage to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an Entity. */
                    interface IEntity {

                        /** Entity textAnchor */
                        textAnchor?: (google.cloud.documentai.v1beta2.Document.ITextAnchor|null);

                        /** Entity type */
                        type?: (string|null);

                        /** Entity mentionText */
                        mentionText?: (string|null);

                        /** Entity mentionId */
                        mentionId?: (string|null);

                        /** Entity confidence */
                        confidence?: (number|null);

                        /** Entity pageAnchor */
                        pageAnchor?: (google.cloud.documentai.v1beta2.Document.IPageAnchor|null);

                        /** Entity id */
                        id?: (string|null);

                        /** Entity boundingPolyForDemoFrontend */
                        boundingPolyForDemoFrontend?: (google.cloud.documentai.v1beta2.IBoundingPoly|null);
                    }

                    /** Represents an Entity. */
                    class Entity implements IEntity {

                        /**
                         * Constructs a new Entity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.IEntity);

                        /** Entity textAnchor. */
                        public textAnchor?: (google.cloud.documentai.v1beta2.Document.ITextAnchor|null);

                        /** Entity type. */
                        public type: string;

                        /** Entity mentionText. */
                        public mentionText: string;

                        /** Entity mentionId. */
                        public mentionId: string;

                        /** Entity confidence. */
                        public confidence: number;

                        /** Entity pageAnchor. */
                        public pageAnchor?: (google.cloud.documentai.v1beta2.Document.IPageAnchor|null);

                        /** Entity id. */
                        public id: string;

                        /** Entity boundingPolyForDemoFrontend. */
                        public boundingPolyForDemoFrontend?: (google.cloud.documentai.v1beta2.IBoundingPoly|null);

                        /**
                         * Creates a new Entity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Entity instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.IEntity): google.cloud.documentai.v1beta2.Document.Entity;

                        /**
                         * Encodes the specified Entity message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Entity.verify|verify} messages.
                         * @param message Entity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.Entity.verify|verify} messages.
                         * @param message Entity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Entity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Entity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.Entity;

                        /**
                         * Decodes an Entity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Entity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.Entity;

                        /**
                         * Verifies an Entity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Entity
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.Entity;

                        /**
                         * Creates a plain object from an Entity message. Also converts values to other types if specified.
                         * @param message Entity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Entity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an EntityRelation. */
                    interface IEntityRelation {

                        /** EntityRelation subjectId */
                        subjectId?: (string|null);

                        /** EntityRelation objectId */
                        objectId?: (string|null);

                        /** EntityRelation relation */
                        relation?: (string|null);
                    }

                    /** Represents an EntityRelation. */
                    class EntityRelation implements IEntityRelation {

                        /**
                         * Constructs a new EntityRelation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.IEntityRelation);

                        /** EntityRelation subjectId. */
                        public subjectId: string;

                        /** EntityRelation objectId. */
                        public objectId: string;

                        /** EntityRelation relation. */
                        public relation: string;

                        /**
                         * Creates a new EntityRelation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EntityRelation instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.IEntityRelation): google.cloud.documentai.v1beta2.Document.EntityRelation;

                        /**
                         * Encodes the specified EntityRelation message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.EntityRelation.verify|verify} messages.
                         * @param message EntityRelation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.IEntityRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EntityRelation message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.EntityRelation.verify|verify} messages.
                         * @param message EntityRelation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.IEntityRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EntityRelation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EntityRelation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.EntityRelation;

                        /**
                         * Decodes an EntityRelation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EntityRelation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.EntityRelation;

                        /**
                         * Verifies an EntityRelation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EntityRelation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EntityRelation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.EntityRelation;

                        /**
                         * Creates a plain object from an EntityRelation message. Also converts values to other types if specified.
                         * @param message EntityRelation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.EntityRelation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EntityRelation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TextAnchor. */
                    interface ITextAnchor {

                        /** TextAnchor textSegments */
                        textSegments?: (google.cloud.documentai.v1beta2.Document.TextAnchor.ITextSegment[]|null);
                    }

                    /** Represents a TextAnchor. */
                    class TextAnchor implements ITextAnchor {

                        /**
                         * Constructs a new TextAnchor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.ITextAnchor);

                        /** TextAnchor textSegments. */
                        public textSegments: google.cloud.documentai.v1beta2.Document.TextAnchor.ITextSegment[];

                        /**
                         * Creates a new TextAnchor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextAnchor instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.ITextAnchor): google.cloud.documentai.v1beta2.Document.TextAnchor;

                        /**
                         * Encodes the specified TextAnchor message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.TextAnchor.verify|verify} messages.
                         * @param message TextAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.ITextAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextAnchor message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.TextAnchor.verify|verify} messages.
                         * @param message TextAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.ITextAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextAnchor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.TextAnchor;

                        /**
                         * Decodes a TextAnchor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.TextAnchor;

                        /**
                         * Verifies a TextAnchor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextAnchor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextAnchor
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.TextAnchor;

                        /**
                         * Creates a plain object from a TextAnchor message. Also converts values to other types if specified.
                         * @param message TextAnchor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.TextAnchor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextAnchor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TextAnchor {

                        /** Properties of a TextSegment. */
                        interface ITextSegment {

                            /** TextSegment startIndex */
                            startIndex?: (number|Long|string|null);

                            /** TextSegment endIndex */
                            endIndex?: (number|Long|string|null);
                        }

                        /** Represents a TextSegment. */
                        class TextSegment implements ITextSegment {

                            /**
                             * Constructs a new TextSegment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.TextAnchor.ITextSegment);

                            /** TextSegment startIndex. */
                            public startIndex: (number|Long|string);

                            /** TextSegment endIndex. */
                            public endIndex: (number|Long|string);

                            /**
                             * Creates a new TextSegment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextSegment instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.TextAnchor.ITextSegment): google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment;

                            /**
                             * Encodes the specified TextSegment message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment.verify|verify} messages.
                             * @param message TextSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.TextAnchor.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextSegment message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment.verify|verify} messages.
                             * @param message TextSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.TextAnchor.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextSegment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment;

                            /**
                             * Decodes a TextSegment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment;

                            /**
                             * Verifies a TextSegment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextSegment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextSegment
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment;

                            /**
                             * Creates a plain object from a TextSegment message. Also converts values to other types if specified.
                             * @param message TextSegment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.TextAnchor.TextSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextSegment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a PageAnchor. */
                    interface IPageAnchor {

                        /** PageAnchor pageRefs */
                        pageRefs?: (google.cloud.documentai.v1beta2.Document.PageAnchor.IPageRef[]|null);
                    }

                    /** Represents a PageAnchor. */
                    class PageAnchor implements IPageAnchor {

                        /**
                         * Constructs a new PageAnchor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta2.Document.IPageAnchor);

                        /** PageAnchor pageRefs. */
                        public pageRefs: google.cloud.documentai.v1beta2.Document.PageAnchor.IPageRef[];

                        /**
                         * Creates a new PageAnchor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PageAnchor instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta2.Document.IPageAnchor): google.cloud.documentai.v1beta2.Document.PageAnchor;

                        /**
                         * Encodes the specified PageAnchor message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.PageAnchor.verify|verify} messages.
                         * @param message PageAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta2.Document.IPageAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PageAnchor message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.PageAnchor.verify|verify} messages.
                         * @param message PageAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.IPageAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PageAnchor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PageAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.PageAnchor;

                        /**
                         * Decodes a PageAnchor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PageAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.PageAnchor;

                        /**
                         * Verifies a PageAnchor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PageAnchor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PageAnchor
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.PageAnchor;

                        /**
                         * Creates a plain object from a PageAnchor message. Also converts values to other types if specified.
                         * @param message PageAnchor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta2.Document.PageAnchor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PageAnchor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace PageAnchor {

                        /** Properties of a PageRef. */
                        interface IPageRef {

                            /** PageRef page */
                            page?: (number|Long|string|null);

                            /** PageRef layoutType */
                            layoutType?: (google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef.LayoutType|keyof typeof google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef.LayoutType|null);

                            /** PageRef layoutId */
                            layoutId?: (string|null);
                        }

                        /** Represents a PageRef. */
                        class PageRef implements IPageRef {

                            /**
                             * Constructs a new PageRef.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta2.Document.PageAnchor.IPageRef);

                            /** PageRef page. */
                            public page: (number|Long|string);

                            /** PageRef layoutType. */
                            public layoutType: (google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef.LayoutType|keyof typeof google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef.LayoutType);

                            /** PageRef layoutId. */
                            public layoutId: string;

                            /**
                             * Creates a new PageRef instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PageRef instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta2.Document.PageAnchor.IPageRef): google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef;

                            /**
                             * Encodes the specified PageRef message. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef.verify|verify} messages.
                             * @param message PageRef message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta2.Document.PageAnchor.IPageRef, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PageRef message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef.verify|verify} messages.
                             * @param message PageRef message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta2.Document.PageAnchor.IPageRef, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PageRef message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PageRef
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef;

                            /**
                             * Decodes a PageRef message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PageRef
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef;

                            /**
                             * Verifies a PageRef message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PageRef message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PageRef
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef;

                            /**
                             * Creates a plain object from a PageRef message. Also converts values to other types if specified.
                             * @param message PageRef
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta2.Document.PageAnchor.PageRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PageRef to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace PageRef {

                            /** LayoutType enum. */
                            enum LayoutType {
                                LAYOUT_TYPE_UNSPECIFIED = 0,
                                BLOCK = 1,
                                PARAGRAPH = 2,
                                LINE = 3,
                                TOKEN = 4,
                                VISUAL_ELEMENT = 5,
                                TABLE = 6,
                                FORM_FIELD = 7
                            }
                        }
                    }
                }

                /** Properties of a Vertex. */
                interface IVertex {

                    /** Vertex x */
                    x?: (number|null);

                    /** Vertex y */
                    y?: (number|null);
                }

                /** Represents a Vertex. */
                class Vertex implements IVertex {

                    /**
                     * Constructs a new Vertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IVertex);

                    /** Vertex x. */
                    public x: number;

                    /** Vertex y. */
                    public y: number;

                    /**
                     * Creates a new Vertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vertex instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IVertex): google.cloud.documentai.v1beta2.Vertex;

                    /**
                     * Encodes the specified Vertex message. Does not implicitly {@link google.cloud.documentai.v1beta2.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Vertex message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.Vertex;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.Vertex;

                    /**
                     * Verifies a Vertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Vertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Vertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.Vertex;

                    /**
                     * Creates a plain object from a Vertex message. Also converts values to other types if specified.
                     * @param message Vertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.Vertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Vertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NormalizedVertex. */
                interface INormalizedVertex {

                    /** NormalizedVertex x */
                    x?: (number|null);

                    /** NormalizedVertex y */
                    y?: (number|null);
                }

                /** Represents a NormalizedVertex. */
                class NormalizedVertex implements INormalizedVertex {

                    /**
                     * Constructs a new NormalizedVertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.INormalizedVertex);

                    /** NormalizedVertex x. */
                    public x: number;

                    /** NormalizedVertex y. */
                    public y: number;

                    /**
                     * Creates a new NormalizedVertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedVertex instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.INormalizedVertex): google.cloud.documentai.v1beta2.NormalizedVertex;

                    /**
                     * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.documentai.v1beta2.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.NormalizedVertex;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.NormalizedVertex;

                    /**
                     * Verifies a NormalizedVertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedVertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedVertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.NormalizedVertex;

                    /**
                     * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                     * @param message NormalizedVertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.NormalizedVertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedVertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BoundingPoly. */
                interface IBoundingPoly {

                    /** BoundingPoly vertices */
                    vertices?: (google.cloud.documentai.v1beta2.IVertex[]|null);

                    /** BoundingPoly normalizedVertices */
                    normalizedVertices?: (google.cloud.documentai.v1beta2.INormalizedVertex[]|null);
                }

                /** Represents a BoundingPoly. */
                class BoundingPoly implements IBoundingPoly {

                    /**
                     * Constructs a new BoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IBoundingPoly);

                    /** BoundingPoly vertices. */
                    public vertices: google.cloud.documentai.v1beta2.IVertex[];

                    /** BoundingPoly normalizedVertices. */
                    public normalizedVertices: google.cloud.documentai.v1beta2.INormalizedVertex[];

                    /**
                     * Creates a new BoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingPoly instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IBoundingPoly): google.cloud.documentai.v1beta2.BoundingPoly;

                    /**
                     * Encodes the specified BoundingPoly message. Does not implicitly {@link google.cloud.documentai.v1beta2.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingPoly message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.BoundingPoly;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.BoundingPoly;

                    /**
                     * Verifies a BoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.BoundingPoly;

                    /**
                     * Creates a plain object from a BoundingPoly message. Also converts values to other types if specified.
                     * @param message BoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.BoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Represents a DocumentUnderstandingService */
                class DocumentUnderstandingService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DocumentUnderstandingService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DocumentUnderstandingService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DocumentUnderstandingService;

                    /**
                     * Calls BatchProcessDocuments.
                     * @param request BatchProcessDocumentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchProcessDocuments(request: google.cloud.documentai.v1beta2.IBatchProcessDocumentsRequest, callback: google.cloud.documentai.v1beta2.DocumentUnderstandingService.BatchProcessDocumentsCallback): void;

                    /**
                     * Calls BatchProcessDocuments.
                     * @param request BatchProcessDocumentsRequest message or plain object
                     * @returns Promise
                     */
                    public batchProcessDocuments(request: google.cloud.documentai.v1beta2.IBatchProcessDocumentsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ProcessDocument.
                     * @param request ProcessDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Document
                     */
                    public processDocument(request: google.cloud.documentai.v1beta2.IProcessDocumentRequest, callback: google.cloud.documentai.v1beta2.DocumentUnderstandingService.ProcessDocumentCallback): void;

                    /**
                     * Calls ProcessDocument.
                     * @param request ProcessDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public processDocument(request: google.cloud.documentai.v1beta2.IProcessDocumentRequest): Promise<google.cloud.documentai.v1beta2.Document>;
                }

                namespace DocumentUnderstandingService {

                    /**
                     * Callback as used by {@link google.cloud.documentai.v1beta2.DocumentUnderstandingService#batchProcessDocuments}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchProcessDocumentsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.documentai.v1beta2.DocumentUnderstandingService#processDocument}.
                     * @param error Error, if any
                     * @param [response] Document
                     */
                    type ProcessDocumentCallback = (error: (Error|null), response?: google.cloud.documentai.v1beta2.Document) => void;
                }

                /** Properties of a BatchProcessDocumentsRequest. */
                interface IBatchProcessDocumentsRequest {

                    /** BatchProcessDocumentsRequest requests */
                    requests?: (google.cloud.documentai.v1beta2.IProcessDocumentRequest[]|null);

                    /** BatchProcessDocumentsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a BatchProcessDocumentsRequest. */
                class BatchProcessDocumentsRequest implements IBatchProcessDocumentsRequest {

                    /**
                     * Constructs a new BatchProcessDocumentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IBatchProcessDocumentsRequest);

                    /** BatchProcessDocumentsRequest requests. */
                    public requests: google.cloud.documentai.v1beta2.IProcessDocumentRequest[];

                    /** BatchProcessDocumentsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new BatchProcessDocumentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchProcessDocumentsRequest instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IBatchProcessDocumentsRequest): google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest;

                    /**
                     * Encodes the specified BatchProcessDocumentsRequest message. Does not implicitly {@link google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest.verify|verify} messages.
                     * @param message BatchProcessDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IBatchProcessDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchProcessDocumentsRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest.verify|verify} messages.
                     * @param message BatchProcessDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IBatchProcessDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchProcessDocumentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchProcessDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest;

                    /**
                     * Decodes a BatchProcessDocumentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchProcessDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest;

                    /**
                     * Verifies a BatchProcessDocumentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchProcessDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchProcessDocumentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest;

                    /**
                     * Creates a plain object from a BatchProcessDocumentsRequest message. Also converts values to other types if specified.
                     * @param message BatchProcessDocumentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.BatchProcessDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchProcessDocumentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProcessDocumentRequest. */
                interface IProcessDocumentRequest {

                    /** ProcessDocumentRequest parent */
                    parent?: (string|null);

                    /** ProcessDocumentRequest inputConfig */
                    inputConfig?: (google.cloud.documentai.v1beta2.IInputConfig|null);

                    /** ProcessDocumentRequest outputConfig */
                    outputConfig?: (google.cloud.documentai.v1beta2.IOutputConfig|null);

                    /** ProcessDocumentRequest documentType */
                    documentType?: (string|null);

                    /** ProcessDocumentRequest tableExtractionParams */
                    tableExtractionParams?: (google.cloud.documentai.v1beta2.ITableExtractionParams|null);

                    /** ProcessDocumentRequest formExtractionParams */
                    formExtractionParams?: (google.cloud.documentai.v1beta2.IFormExtractionParams|null);

                    /** ProcessDocumentRequest entityExtractionParams */
                    entityExtractionParams?: (google.cloud.documentai.v1beta2.IEntityExtractionParams|null);

                    /** ProcessDocumentRequest ocrParams */
                    ocrParams?: (google.cloud.documentai.v1beta2.IOcrParams|null);

                    /** ProcessDocumentRequest automlParams */
                    automlParams?: (google.cloud.documentai.v1beta2.IAutoMlParams|null);
                }

                /** Represents a ProcessDocumentRequest. */
                class ProcessDocumentRequest implements IProcessDocumentRequest {

                    /**
                     * Constructs a new ProcessDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IProcessDocumentRequest);

                    /** ProcessDocumentRequest parent. */
                    public parent: string;

                    /** ProcessDocumentRequest inputConfig. */
                    public inputConfig?: (google.cloud.documentai.v1beta2.IInputConfig|null);

                    /** ProcessDocumentRequest outputConfig. */
                    public outputConfig?: (google.cloud.documentai.v1beta2.IOutputConfig|null);

                    /** ProcessDocumentRequest documentType. */
                    public documentType: string;

                    /** ProcessDocumentRequest tableExtractionParams. */
                    public tableExtractionParams?: (google.cloud.documentai.v1beta2.ITableExtractionParams|null);

                    /** ProcessDocumentRequest formExtractionParams. */
                    public formExtractionParams?: (google.cloud.documentai.v1beta2.IFormExtractionParams|null);

                    /** ProcessDocumentRequest entityExtractionParams. */
                    public entityExtractionParams?: (google.cloud.documentai.v1beta2.IEntityExtractionParams|null);

                    /** ProcessDocumentRequest ocrParams. */
                    public ocrParams?: (google.cloud.documentai.v1beta2.IOcrParams|null);

                    /** ProcessDocumentRequest automlParams. */
                    public automlParams?: (google.cloud.documentai.v1beta2.IAutoMlParams|null);

                    /**
                     * Creates a new ProcessDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProcessDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IProcessDocumentRequest): google.cloud.documentai.v1beta2.ProcessDocumentRequest;

                    /**
                     * Encodes the specified ProcessDocumentRequest message. Does not implicitly {@link google.cloud.documentai.v1beta2.ProcessDocumentRequest.verify|verify} messages.
                     * @param message ProcessDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IProcessDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProcessDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.ProcessDocumentRequest.verify|verify} messages.
                     * @param message ProcessDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IProcessDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProcessDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProcessDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.ProcessDocumentRequest;

                    /**
                     * Decodes a ProcessDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProcessDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.ProcessDocumentRequest;

                    /**
                     * Verifies a ProcessDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProcessDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProcessDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.ProcessDocumentRequest;

                    /**
                     * Creates a plain object from a ProcessDocumentRequest message. Also converts values to other types if specified.
                     * @param message ProcessDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.ProcessDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProcessDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchProcessDocumentsResponse. */
                interface IBatchProcessDocumentsResponse {

                    /** BatchProcessDocumentsResponse responses */
                    responses?: (google.cloud.documentai.v1beta2.IProcessDocumentResponse[]|null);
                }

                /** Represents a BatchProcessDocumentsResponse. */
                class BatchProcessDocumentsResponse implements IBatchProcessDocumentsResponse {

                    /**
                     * Constructs a new BatchProcessDocumentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IBatchProcessDocumentsResponse);

                    /** BatchProcessDocumentsResponse responses. */
                    public responses: google.cloud.documentai.v1beta2.IProcessDocumentResponse[];

                    /**
                     * Creates a new BatchProcessDocumentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchProcessDocumentsResponse instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IBatchProcessDocumentsResponse): google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse;

                    /**
                     * Encodes the specified BatchProcessDocumentsResponse message. Does not implicitly {@link google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse.verify|verify} messages.
                     * @param message BatchProcessDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IBatchProcessDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchProcessDocumentsResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse.verify|verify} messages.
                     * @param message BatchProcessDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IBatchProcessDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchProcessDocumentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchProcessDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse;

                    /**
                     * Decodes a BatchProcessDocumentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchProcessDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse;

                    /**
                     * Verifies a BatchProcessDocumentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchProcessDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchProcessDocumentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse;

                    /**
                     * Creates a plain object from a BatchProcessDocumentsResponse message. Also converts values to other types if specified.
                     * @param message BatchProcessDocumentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.BatchProcessDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchProcessDocumentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ProcessDocumentResponse. */
                interface IProcessDocumentResponse {

                    /** ProcessDocumentResponse inputConfig */
                    inputConfig?: (google.cloud.documentai.v1beta2.IInputConfig|null);

                    /** ProcessDocumentResponse outputConfig */
                    outputConfig?: (google.cloud.documentai.v1beta2.IOutputConfig|null);
                }

                /** Represents a ProcessDocumentResponse. */
                class ProcessDocumentResponse implements IProcessDocumentResponse {

                    /**
                     * Constructs a new ProcessDocumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IProcessDocumentResponse);

                    /** ProcessDocumentResponse inputConfig. */
                    public inputConfig?: (google.cloud.documentai.v1beta2.IInputConfig|null);

                    /** ProcessDocumentResponse outputConfig. */
                    public outputConfig?: (google.cloud.documentai.v1beta2.IOutputConfig|null);

                    /**
                     * Creates a new ProcessDocumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProcessDocumentResponse instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IProcessDocumentResponse): google.cloud.documentai.v1beta2.ProcessDocumentResponse;

                    /**
                     * Encodes the specified ProcessDocumentResponse message. Does not implicitly {@link google.cloud.documentai.v1beta2.ProcessDocumentResponse.verify|verify} messages.
                     * @param message ProcessDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IProcessDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProcessDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.ProcessDocumentResponse.verify|verify} messages.
                     * @param message ProcessDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IProcessDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProcessDocumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProcessDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.ProcessDocumentResponse;

                    /**
                     * Decodes a ProcessDocumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProcessDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.ProcessDocumentResponse;

                    /**
                     * Verifies a ProcessDocumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProcessDocumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProcessDocumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.ProcessDocumentResponse;

                    /**
                     * Creates a plain object from a ProcessDocumentResponse message. Also converts values to other types if specified.
                     * @param message ProcessDocumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.ProcessDocumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProcessDocumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OcrParams. */
                interface IOcrParams {

                    /** OcrParams languageHints */
                    languageHints?: (string[]|null);
                }

                /** Represents an OcrParams. */
                class OcrParams implements IOcrParams {

                    /**
                     * Constructs a new OcrParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IOcrParams);

                    /** OcrParams languageHints. */
                    public languageHints: string[];

                    /**
                     * Creates a new OcrParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OcrParams instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IOcrParams): google.cloud.documentai.v1beta2.OcrParams;

                    /**
                     * Encodes the specified OcrParams message. Does not implicitly {@link google.cloud.documentai.v1beta2.OcrParams.verify|verify} messages.
                     * @param message OcrParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IOcrParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OcrParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.OcrParams.verify|verify} messages.
                     * @param message OcrParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IOcrParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OcrParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OcrParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.OcrParams;

                    /**
                     * Decodes an OcrParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OcrParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.OcrParams;

                    /**
                     * Verifies an OcrParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OcrParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OcrParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.OcrParams;

                    /**
                     * Creates a plain object from an OcrParams message. Also converts values to other types if specified.
                     * @param message OcrParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.OcrParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OcrParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TableExtractionParams. */
                interface ITableExtractionParams {

                    /** TableExtractionParams enabled */
                    enabled?: (boolean|null);

                    /** TableExtractionParams tableBoundHints */
                    tableBoundHints?: (google.cloud.documentai.v1beta2.ITableBoundHint[]|null);

                    /** TableExtractionParams headerHints */
                    headerHints?: (string[]|null);

                    /** TableExtractionParams modelVersion */
                    modelVersion?: (string|null);
                }

                /** Represents a TableExtractionParams. */
                class TableExtractionParams implements ITableExtractionParams {

                    /**
                     * Constructs a new TableExtractionParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.ITableExtractionParams);

                    /** TableExtractionParams enabled. */
                    public enabled: boolean;

                    /** TableExtractionParams tableBoundHints. */
                    public tableBoundHints: google.cloud.documentai.v1beta2.ITableBoundHint[];

                    /** TableExtractionParams headerHints. */
                    public headerHints: string[];

                    /** TableExtractionParams modelVersion. */
                    public modelVersion: string;

                    /**
                     * Creates a new TableExtractionParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableExtractionParams instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.ITableExtractionParams): google.cloud.documentai.v1beta2.TableExtractionParams;

                    /**
                     * Encodes the specified TableExtractionParams message. Does not implicitly {@link google.cloud.documentai.v1beta2.TableExtractionParams.verify|verify} messages.
                     * @param message TableExtractionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.ITableExtractionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableExtractionParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.TableExtractionParams.verify|verify} messages.
                     * @param message TableExtractionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.ITableExtractionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableExtractionParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableExtractionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.TableExtractionParams;

                    /**
                     * Decodes a TableExtractionParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableExtractionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.TableExtractionParams;

                    /**
                     * Verifies a TableExtractionParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TableExtractionParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TableExtractionParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.TableExtractionParams;

                    /**
                     * Creates a plain object from a TableExtractionParams message. Also converts values to other types if specified.
                     * @param message TableExtractionParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.TableExtractionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableExtractionParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TableBoundHint. */
                interface ITableBoundHint {

                    /** TableBoundHint pageNumber */
                    pageNumber?: (number|null);

                    /** TableBoundHint boundingBox */
                    boundingBox?: (google.cloud.documentai.v1beta2.IBoundingPoly|null);
                }

                /** Represents a TableBoundHint. */
                class TableBoundHint implements ITableBoundHint {

                    /**
                     * Constructs a new TableBoundHint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.ITableBoundHint);

                    /** TableBoundHint pageNumber. */
                    public pageNumber: number;

                    /** TableBoundHint boundingBox. */
                    public boundingBox?: (google.cloud.documentai.v1beta2.IBoundingPoly|null);

                    /**
                     * Creates a new TableBoundHint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TableBoundHint instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.ITableBoundHint): google.cloud.documentai.v1beta2.TableBoundHint;

                    /**
                     * Encodes the specified TableBoundHint message. Does not implicitly {@link google.cloud.documentai.v1beta2.TableBoundHint.verify|verify} messages.
                     * @param message TableBoundHint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.ITableBoundHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TableBoundHint message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.TableBoundHint.verify|verify} messages.
                     * @param message TableBoundHint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.ITableBoundHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TableBoundHint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TableBoundHint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.TableBoundHint;

                    /**
                     * Decodes a TableBoundHint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TableBoundHint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.TableBoundHint;

                    /**
                     * Verifies a TableBoundHint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TableBoundHint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TableBoundHint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.TableBoundHint;

                    /**
                     * Creates a plain object from a TableBoundHint message. Also converts values to other types if specified.
                     * @param message TableBoundHint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.TableBoundHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TableBoundHint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FormExtractionParams. */
                interface IFormExtractionParams {

                    /** FormExtractionParams enabled */
                    enabled?: (boolean|null);

                    /** FormExtractionParams keyValuePairHints */
                    keyValuePairHints?: (google.cloud.documentai.v1beta2.IKeyValuePairHint[]|null);

                    /** FormExtractionParams modelVersion */
                    modelVersion?: (string|null);
                }

                /** Represents a FormExtractionParams. */
                class FormExtractionParams implements IFormExtractionParams {

                    /**
                     * Constructs a new FormExtractionParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IFormExtractionParams);

                    /** FormExtractionParams enabled. */
                    public enabled: boolean;

                    /** FormExtractionParams keyValuePairHints. */
                    public keyValuePairHints: google.cloud.documentai.v1beta2.IKeyValuePairHint[];

                    /** FormExtractionParams modelVersion. */
                    public modelVersion: string;

                    /**
                     * Creates a new FormExtractionParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FormExtractionParams instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IFormExtractionParams): google.cloud.documentai.v1beta2.FormExtractionParams;

                    /**
                     * Encodes the specified FormExtractionParams message. Does not implicitly {@link google.cloud.documentai.v1beta2.FormExtractionParams.verify|verify} messages.
                     * @param message FormExtractionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IFormExtractionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FormExtractionParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.FormExtractionParams.verify|verify} messages.
                     * @param message FormExtractionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IFormExtractionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FormExtractionParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FormExtractionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.FormExtractionParams;

                    /**
                     * Decodes a FormExtractionParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FormExtractionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.FormExtractionParams;

                    /**
                     * Verifies a FormExtractionParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FormExtractionParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FormExtractionParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.FormExtractionParams;

                    /**
                     * Creates a plain object from a FormExtractionParams message. Also converts values to other types if specified.
                     * @param message FormExtractionParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.FormExtractionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FormExtractionParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KeyValuePairHint. */
                interface IKeyValuePairHint {

                    /** KeyValuePairHint key */
                    key?: (string|null);

                    /** KeyValuePairHint valueTypes */
                    valueTypes?: (string[]|null);
                }

                /** Represents a KeyValuePairHint. */
                class KeyValuePairHint implements IKeyValuePairHint {

                    /**
                     * Constructs a new KeyValuePairHint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IKeyValuePairHint);

                    /** KeyValuePairHint key. */
                    public key: string;

                    /** KeyValuePairHint valueTypes. */
                    public valueTypes: string[];

                    /**
                     * Creates a new KeyValuePairHint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KeyValuePairHint instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IKeyValuePairHint): google.cloud.documentai.v1beta2.KeyValuePairHint;

                    /**
                     * Encodes the specified KeyValuePairHint message. Does not implicitly {@link google.cloud.documentai.v1beta2.KeyValuePairHint.verify|verify} messages.
                     * @param message KeyValuePairHint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IKeyValuePairHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KeyValuePairHint message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.KeyValuePairHint.verify|verify} messages.
                     * @param message KeyValuePairHint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IKeyValuePairHint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KeyValuePairHint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KeyValuePairHint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.KeyValuePairHint;

                    /**
                     * Decodes a KeyValuePairHint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KeyValuePairHint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.KeyValuePairHint;

                    /**
                     * Verifies a KeyValuePairHint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KeyValuePairHint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KeyValuePairHint
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.KeyValuePairHint;

                    /**
                     * Creates a plain object from a KeyValuePairHint message. Also converts values to other types if specified.
                     * @param message KeyValuePairHint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.KeyValuePairHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KeyValuePairHint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EntityExtractionParams. */
                interface IEntityExtractionParams {

                    /** EntityExtractionParams enabled */
                    enabled?: (boolean|null);

                    /** EntityExtractionParams modelVersion */
                    modelVersion?: (string|null);
                }

                /** Represents an EntityExtractionParams. */
                class EntityExtractionParams implements IEntityExtractionParams {

                    /**
                     * Constructs a new EntityExtractionParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IEntityExtractionParams);

                    /** EntityExtractionParams enabled. */
                    public enabled: boolean;

                    /** EntityExtractionParams modelVersion. */
                    public modelVersion: string;

                    /**
                     * Creates a new EntityExtractionParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EntityExtractionParams instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IEntityExtractionParams): google.cloud.documentai.v1beta2.EntityExtractionParams;

                    /**
                     * Encodes the specified EntityExtractionParams message. Does not implicitly {@link google.cloud.documentai.v1beta2.EntityExtractionParams.verify|verify} messages.
                     * @param message EntityExtractionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IEntityExtractionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EntityExtractionParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.EntityExtractionParams.verify|verify} messages.
                     * @param message EntityExtractionParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IEntityExtractionParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EntityExtractionParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EntityExtractionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.EntityExtractionParams;

                    /**
                     * Decodes an EntityExtractionParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EntityExtractionParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.EntityExtractionParams;

                    /**
                     * Verifies an EntityExtractionParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EntityExtractionParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EntityExtractionParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.EntityExtractionParams;

                    /**
                     * Creates a plain object from an EntityExtractionParams message. Also converts values to other types if specified.
                     * @param message EntityExtractionParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.EntityExtractionParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EntityExtractionParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AutoMlParams. */
                interface IAutoMlParams {

                    /** AutoMlParams model */
                    model?: (string|null);
                }

                /** Represents an AutoMlParams. */
                class AutoMlParams implements IAutoMlParams {

                    /**
                     * Constructs a new AutoMlParams.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IAutoMlParams);

                    /** AutoMlParams model. */
                    public model: string;

                    /**
                     * Creates a new AutoMlParams instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutoMlParams instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IAutoMlParams): google.cloud.documentai.v1beta2.AutoMlParams;

                    /**
                     * Encodes the specified AutoMlParams message. Does not implicitly {@link google.cloud.documentai.v1beta2.AutoMlParams.verify|verify} messages.
                     * @param message AutoMlParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IAutoMlParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutoMlParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.AutoMlParams.verify|verify} messages.
                     * @param message AutoMlParams message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IAutoMlParams, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutoMlParams message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutoMlParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.AutoMlParams;

                    /**
                     * Decodes an AutoMlParams message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutoMlParams
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.AutoMlParams;

                    /**
                     * Verifies an AutoMlParams message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutoMlParams message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutoMlParams
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.AutoMlParams;

                    /**
                     * Creates a plain object from an AutoMlParams message. Also converts values to other types if specified.
                     * @param message AutoMlParams
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.AutoMlParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutoMlParams to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig gcsSource */
                    gcsSource?: (google.cloud.documentai.v1beta2.IGcsSource|null);

                    /** InputConfig contents */
                    contents?: (Uint8Array|string|null);

                    /** InputConfig mimeType */
                    mimeType?: (string|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IInputConfig);

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.cloud.documentai.v1beta2.IGcsSource|null);

                    /** InputConfig contents. */
                    public contents: (Uint8Array|string);

                    /** InputConfig mimeType. */
                    public mimeType: string;

                    /** InputConfig source. */
                    public source?: ("gcsSource"|"contents");

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IInputConfig): google.cloud.documentai.v1beta2.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta2.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.documentai.v1beta2.IGcsDestination|null);

                    /** OutputConfig pagesPerShard */
                    pagesPerShard?: (number|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.documentai.v1beta2.IGcsDestination|null);

                    /** OutputConfig pagesPerShard. */
                    public pagesPerShard: number;

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IOutputConfig): google.cloud.documentai.v1beta2.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta2.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource uri */
                    uri?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IGcsSource);

                    /** GcsSource uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IGcsSource): google.cloud.documentai.v1beta2.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.documentai.v1beta2.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IGcsDestination): google.cloud.documentai.v1beta2.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.documentai.v1beta2.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata state */
                    state?: (google.cloud.documentai.v1beta2.OperationMetadata.State|keyof typeof google.cloud.documentai.v1beta2.OperationMetadata.State|null);

                    /** OperationMetadata stateMessage */
                    stateMessage?: (string|null);

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta2.IOperationMetadata);

                    /** OperationMetadata state. */
                    public state: (google.cloud.documentai.v1beta2.OperationMetadata.State|keyof typeof google.cloud.documentai.v1beta2.OperationMetadata.State);

                    /** OperationMetadata stateMessage. */
                    public stateMessage: string;

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta2.IOperationMetadata): google.cloud.documentai.v1beta2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.documentai.v1beta2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta2.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OperationMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACCEPTED = 1,
                        WAITING = 2,
                        RUNNING = 3,
                        SUCCEEDED = 4,
                        CANCELLED = 5,
                        FAILED = 6
                    }
                }
            }

            /** Namespace v1beta3. */
            namespace v1beta3 {

                /** Properties of a Document. */
                interface IDocument {

                    /** Document uri */
                    uri?: (string|null);

                    /** Document content */
                    content?: (Uint8Array|string|null);

                    /** Document mimeType */
                    mimeType?: (string|null);

                    /** Document text */
                    text?: (string|null);

                    /** Document textStyles */
                    textStyles?: (google.cloud.documentai.v1beta3.Document.IStyle[]|null);

                    /** Document pages */
                    pages?: (google.cloud.documentai.v1beta3.Document.IPage[]|null);

                    /** Document entities */
                    entities?: (google.cloud.documentai.v1beta3.Document.IEntity[]|null);

                    /** Document entityRelations */
                    entityRelations?: (google.cloud.documentai.v1beta3.Document.IEntityRelation[]|null);

                    /** Document translations */
                    translations?: (google.cloud.documentai.v1beta3.Document.ITranslation[]|null);

                    /** Document textChanges */
                    textChanges?: (google.cloud.documentai.v1beta3.Document.ITextChange[]|null);

                    /** Document shardInfo */
                    shardInfo?: (google.cloud.documentai.v1beta3.Document.IShardInfo|null);

                    /** Document error */
                    error?: (google.rpc.IStatus|null);

                    /** Document revisions */
                    revisions?: (google.cloud.documentai.v1beta3.Document.IRevision[]|null);
                }

                /** Represents a Document. */
                class Document implements IDocument {

                    /**
                     * Constructs a new Document.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IDocument);

                    /** Document uri. */
                    public uri: string;

                    /** Document content. */
                    public content: (Uint8Array|string);

                    /** Document mimeType. */
                    public mimeType: string;

                    /** Document text. */
                    public text: string;

                    /** Document textStyles. */
                    public textStyles: google.cloud.documentai.v1beta3.Document.IStyle[];

                    /** Document pages. */
                    public pages: google.cloud.documentai.v1beta3.Document.IPage[];

                    /** Document entities. */
                    public entities: google.cloud.documentai.v1beta3.Document.IEntity[];

                    /** Document entityRelations. */
                    public entityRelations: google.cloud.documentai.v1beta3.Document.IEntityRelation[];

                    /** Document translations. */
                    public translations: google.cloud.documentai.v1beta3.Document.ITranslation[];

                    /** Document textChanges. */
                    public textChanges: google.cloud.documentai.v1beta3.Document.ITextChange[];

                    /** Document shardInfo. */
                    public shardInfo?: (google.cloud.documentai.v1beta3.Document.IShardInfo|null);

                    /** Document error. */
                    public error?: (google.rpc.IStatus|null);

                    /** Document revisions. */
                    public revisions: google.cloud.documentai.v1beta3.Document.IRevision[];

                    /** Document source. */
                    public source?: ("uri"|"content");

                    /**
                     * Creates a new Document instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Document instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IDocument): google.cloud.documentai.v1beta3.Document;

                    /**
                     * Encodes the specified Document message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Document message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.verify|verify} messages.
                     * @param message Document message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Document message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document;

                    /**
                     * Decodes a Document message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Document
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document;

                    /**
                     * Verifies a Document message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Document message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Document
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document;

                    /**
                     * Creates a plain object from a Document message. Also converts values to other types if specified.
                     * @param message Document
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.Document, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Document to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Document {

                    /** Properties of a ShardInfo. */
                    interface IShardInfo {

                        /** ShardInfo shardIndex */
                        shardIndex?: (number|Long|string|null);

                        /** ShardInfo shardCount */
                        shardCount?: (number|Long|string|null);

                        /** ShardInfo textOffset */
                        textOffset?: (number|Long|string|null);
                    }

                    /** Represents a ShardInfo. */
                    class ShardInfo implements IShardInfo {

                        /**
                         * Constructs a new ShardInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IShardInfo);

                        /** ShardInfo shardIndex. */
                        public shardIndex: (number|Long|string);

                        /** ShardInfo shardCount. */
                        public shardCount: (number|Long|string);

                        /** ShardInfo textOffset. */
                        public textOffset: (number|Long|string);

                        /**
                         * Creates a new ShardInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShardInfo instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IShardInfo): google.cloud.documentai.v1beta3.Document.ShardInfo;

                        /**
                         * Encodes the specified ShardInfo message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.ShardInfo.verify|verify} messages.
                         * @param message ShardInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IShardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShardInfo message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.ShardInfo.verify|verify} messages.
                         * @param message ShardInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IShardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShardInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShardInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.ShardInfo;

                        /**
                         * Decodes a ShardInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShardInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.ShardInfo;

                        /**
                         * Verifies a ShardInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShardInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShardInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.ShardInfo;

                        /**
                         * Creates a plain object from a ShardInfo message. Also converts values to other types if specified.
                         * @param message ShardInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.ShardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShardInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Style. */
                    interface IStyle {

                        /** Style textAnchor */
                        textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** Style color */
                        color?: (google.type.IColor|null);

                        /** Style backgroundColor */
                        backgroundColor?: (google.type.IColor|null);

                        /** Style fontWeight */
                        fontWeight?: (string|null);

                        /** Style textStyle */
                        textStyle?: (string|null);

                        /** Style textDecoration */
                        textDecoration?: (string|null);

                        /** Style fontSize */
                        fontSize?: (google.cloud.documentai.v1beta3.Document.Style.IFontSize|null);
                    }

                    /** Represents a Style. */
                    class Style implements IStyle {

                        /**
                         * Constructs a new Style.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IStyle);

                        /** Style textAnchor. */
                        public textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** Style color. */
                        public color?: (google.type.IColor|null);

                        /** Style backgroundColor. */
                        public backgroundColor?: (google.type.IColor|null);

                        /** Style fontWeight. */
                        public fontWeight: string;

                        /** Style textStyle. */
                        public textStyle: string;

                        /** Style textDecoration. */
                        public textDecoration: string;

                        /** Style fontSize. */
                        public fontSize?: (google.cloud.documentai.v1beta3.Document.Style.IFontSize|null);

                        /**
                         * Creates a new Style instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Style instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IStyle): google.cloud.documentai.v1beta3.Document.Style;

                        /**
                         * Encodes the specified Style message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Style.verify|verify} messages.
                         * @param message Style message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Style message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Style.verify|verify} messages.
                         * @param message Style message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IStyle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Style message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Style
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Style;

                        /**
                         * Decodes a Style message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Style
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Style;

                        /**
                         * Verifies a Style message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Style message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Style
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Style;

                        /**
                         * Creates a plain object from a Style message. Also converts values to other types if specified.
                         * @param message Style
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.Style, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Style to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Style {

                        /** Properties of a FontSize. */
                        interface IFontSize {

                            /** FontSize size */
                            size?: (number|null);

                            /** FontSize unit */
                            unit?: (string|null);
                        }

                        /** Represents a FontSize. */
                        class FontSize implements IFontSize {

                            /**
                             * Constructs a new FontSize.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Style.IFontSize);

                            /** FontSize size. */
                            public size: number;

                            /** FontSize unit. */
                            public unit: string;

                            /**
                             * Creates a new FontSize instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FontSize instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Style.IFontSize): google.cloud.documentai.v1beta3.Document.Style.FontSize;

                            /**
                             * Encodes the specified FontSize message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Style.FontSize.verify|verify} messages.
                             * @param message FontSize message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Style.IFontSize, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FontSize message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Style.FontSize.verify|verify} messages.
                             * @param message FontSize message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Style.IFontSize, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FontSize message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FontSize
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Style.FontSize;

                            /**
                             * Decodes a FontSize message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FontSize
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Style.FontSize;

                            /**
                             * Verifies a FontSize message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FontSize message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FontSize
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Style.FontSize;

                            /**
                             * Creates a plain object from a FontSize message. Also converts values to other types if specified.
                             * @param message FontSize
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Style.FontSize, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FontSize to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Page. */
                    interface IPage {

                        /** Page pageNumber */
                        pageNumber?: (number|null);

                        /** Page image */
                        image?: (google.cloud.documentai.v1beta3.Document.Page.IImage|null);

                        /** Page transforms */
                        transforms?: (google.cloud.documentai.v1beta3.Document.Page.IMatrix[]|null);

                        /** Page dimension */
                        dimension?: (google.cloud.documentai.v1beta3.Document.Page.IDimension|null);

                        /** Page layout */
                        layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                        /** Page detectedLanguages */
                        detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                        /** Page blocks */
                        blocks?: (google.cloud.documentai.v1beta3.Document.Page.IBlock[]|null);

                        /** Page paragraphs */
                        paragraphs?: (google.cloud.documentai.v1beta3.Document.Page.IParagraph[]|null);

                        /** Page lines */
                        lines?: (google.cloud.documentai.v1beta3.Document.Page.ILine[]|null);

                        /** Page tokens */
                        tokens?: (google.cloud.documentai.v1beta3.Document.Page.IToken[]|null);

                        /** Page visualElements */
                        visualElements?: (google.cloud.documentai.v1beta3.Document.Page.IVisualElement[]|null);

                        /** Page tables */
                        tables?: (google.cloud.documentai.v1beta3.Document.Page.ITable[]|null);

                        /** Page formFields */
                        formFields?: (google.cloud.documentai.v1beta3.Document.Page.IFormField[]|null);
                    }

                    /** Represents a Page. */
                    class Page implements IPage {

                        /**
                         * Constructs a new Page.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IPage);

                        /** Page pageNumber. */
                        public pageNumber: number;

                        /** Page image. */
                        public image?: (google.cloud.documentai.v1beta3.Document.Page.IImage|null);

                        /** Page transforms. */
                        public transforms: google.cloud.documentai.v1beta3.Document.Page.IMatrix[];

                        /** Page dimension. */
                        public dimension?: (google.cloud.documentai.v1beta3.Document.Page.IDimension|null);

                        /** Page layout. */
                        public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                        /** Page detectedLanguages. */
                        public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                        /** Page blocks. */
                        public blocks: google.cloud.documentai.v1beta3.Document.Page.IBlock[];

                        /** Page paragraphs. */
                        public paragraphs: google.cloud.documentai.v1beta3.Document.Page.IParagraph[];

                        /** Page lines. */
                        public lines: google.cloud.documentai.v1beta3.Document.Page.ILine[];

                        /** Page tokens. */
                        public tokens: google.cloud.documentai.v1beta3.Document.Page.IToken[];

                        /** Page visualElements. */
                        public visualElements: google.cloud.documentai.v1beta3.Document.Page.IVisualElement[];

                        /** Page tables. */
                        public tables: google.cloud.documentai.v1beta3.Document.Page.ITable[];

                        /** Page formFields. */
                        public formFields: google.cloud.documentai.v1beta3.Document.Page.IFormField[];

                        /**
                         * Creates a new Page instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Page instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IPage): google.cloud.documentai.v1beta3.Document.Page;

                        /**
                         * Encodes the specified Page message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.verify|verify} messages.
                         * @param message Page message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Page message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.verify|verify} messages.
                         * @param message Page message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IPage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Page message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Page
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page;

                        /**
                         * Decodes a Page message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Page
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page;

                        /**
                         * Verifies a Page message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Page message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Page
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page;

                        /**
                         * Creates a plain object from a Page message. Also converts values to other types if specified.
                         * @param message Page
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.Page, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Page to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Page {

                        /** Properties of a Dimension. */
                        interface IDimension {

                            /** Dimension width */
                            width?: (number|null);

                            /** Dimension height */
                            height?: (number|null);

                            /** Dimension unit */
                            unit?: (string|null);
                        }

                        /** Represents a Dimension. */
                        class Dimension implements IDimension {

                            /**
                             * Constructs a new Dimension.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IDimension);

                            /** Dimension width. */
                            public width: number;

                            /** Dimension height. */
                            public height: number;

                            /** Dimension unit. */
                            public unit: string;

                            /**
                             * Creates a new Dimension instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Dimension instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IDimension): google.cloud.documentai.v1beta3.Document.Page.Dimension;

                            /**
                             * Encodes the specified Dimension message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Dimension.verify|verify} messages.
                             * @param message Dimension message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Dimension message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Dimension.verify|verify} messages.
                             * @param message Dimension message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Dimension message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Dimension
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Dimension;

                            /**
                             * Decodes a Dimension message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Dimension
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Dimension;

                            /**
                             * Verifies a Dimension message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Dimension message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Dimension
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Dimension;

                            /**
                             * Creates a plain object from a Dimension message. Also converts values to other types if specified.
                             * @param message Dimension
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Dimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Dimension to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an Image. */
                        interface IImage {

                            /** Image content */
                            content?: (Uint8Array|string|null);

                            /** Image mimeType */
                            mimeType?: (string|null);

                            /** Image width */
                            width?: (number|null);

                            /** Image height */
                            height?: (number|null);
                        }

                        /** Represents an Image. */
                        class Image implements IImage {

                            /**
                             * Constructs a new Image.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IImage);

                            /** Image content. */
                            public content: (Uint8Array|string);

                            /** Image mimeType. */
                            public mimeType: string;

                            /** Image width. */
                            public width: number;

                            /** Image height. */
                            public height: number;

                            /**
                             * Creates a new Image instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Image instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IImage): google.cloud.documentai.v1beta3.Document.Page.Image;

                            /**
                             * Encodes the specified Image message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Image.verify|verify} messages.
                             * @param message Image message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Image message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Image.verify|verify} messages.
                             * @param message Image message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Image message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Image
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Image;

                            /**
                             * Decodes an Image message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Image
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Image;

                            /**
                             * Verifies an Image message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Image message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Image
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Image;

                            /**
                             * Creates a plain object from an Image message. Also converts values to other types if specified.
                             * @param message Image
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Image to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Matrix. */
                        interface IMatrix {

                            /** Matrix rows */
                            rows?: (number|null);

                            /** Matrix cols */
                            cols?: (number|null);

                            /** Matrix type */
                            type?: (number|null);

                            /** Matrix data */
                            data?: (Uint8Array|string|null);
                        }

                        /** Represents a Matrix. */
                        class Matrix implements IMatrix {

                            /**
                             * Constructs a new Matrix.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IMatrix);

                            /** Matrix rows. */
                            public rows: number;

                            /** Matrix cols. */
                            public cols: number;

                            /** Matrix type. */
                            public type: number;

                            /** Matrix data. */
                            public data: (Uint8Array|string);

                            /**
                             * Creates a new Matrix instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Matrix instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IMatrix): google.cloud.documentai.v1beta3.Document.Page.Matrix;

                            /**
                             * Encodes the specified Matrix message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Matrix.verify|verify} messages.
                             * @param message Matrix message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Matrix message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Matrix.verify|verify} messages.
                             * @param message Matrix message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Matrix message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Matrix
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Matrix;

                            /**
                             * Decodes a Matrix message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Matrix
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Matrix;

                            /**
                             * Verifies a Matrix message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Matrix message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Matrix
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Matrix;

                            /**
                             * Creates a plain object from a Matrix message. Also converts values to other types if specified.
                             * @param message Matrix
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Matrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Matrix to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Layout. */
                        interface ILayout {

                            /** Layout textAnchor */
                            textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                            /** Layout confidence */
                            confidence?: (number|null);

                            /** Layout boundingPoly */
                            boundingPoly?: (google.cloud.documentai.v1beta3.IBoundingPoly|null);

                            /** Layout orientation */
                            orientation?: (google.cloud.documentai.v1beta3.Document.Page.Layout.Orientation|keyof typeof google.cloud.documentai.v1beta3.Document.Page.Layout.Orientation|null);
                        }

                        /** Represents a Layout. */
                        class Layout implements ILayout {

                            /**
                             * Constructs a new Layout.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.ILayout);

                            /** Layout textAnchor. */
                            public textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                            /** Layout confidence. */
                            public confidence: number;

                            /** Layout boundingPoly. */
                            public boundingPoly?: (google.cloud.documentai.v1beta3.IBoundingPoly|null);

                            /** Layout orientation. */
                            public orientation: (google.cloud.documentai.v1beta3.Document.Page.Layout.Orientation|keyof typeof google.cloud.documentai.v1beta3.Document.Page.Layout.Orientation);

                            /**
                             * Creates a new Layout instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Layout instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.ILayout): google.cloud.documentai.v1beta3.Document.Page.Layout;

                            /**
                             * Encodes the specified Layout message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Layout.verify|verify} messages.
                             * @param message Layout message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.ILayout, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Layout message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Layout.verify|verify} messages.
                             * @param message Layout message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.ILayout, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Layout message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Layout
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Layout;

                            /**
                             * Decodes a Layout message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Layout
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Layout;

                            /**
                             * Verifies a Layout message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Layout message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Layout
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Layout;

                            /**
                             * Creates a plain object from a Layout message. Also converts values to other types if specified.
                             * @param message Layout
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Layout, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Layout to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Layout {

                            /** Orientation enum. */
                            enum Orientation {
                                ORIENTATION_UNSPECIFIED = 0,
                                PAGE_UP = 1,
                                PAGE_RIGHT = 2,
                                PAGE_DOWN = 3,
                                PAGE_LEFT = 4
                            }
                        }

                        /** Properties of a Block. */
                        interface IBlock {

                            /** Block layout */
                            layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Block detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                            /** Block provenance */
                            provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);
                        }

                        /** Represents a Block. */
                        class Block implements IBlock {

                            /**
                             * Constructs a new Block.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IBlock);

                            /** Block layout. */
                            public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Block detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /** Block provenance. */
                            public provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);

                            /**
                             * Creates a new Block instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Block instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IBlock): google.cloud.documentai.v1beta3.Document.Page.Block;

                            /**
                             * Encodes the specified Block message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Block.verify|verify} messages.
                             * @param message Block message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Block message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Block.verify|verify} messages.
                             * @param message Block message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Block message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Block
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Block;

                            /**
                             * Decodes a Block message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Block
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Block;

                            /**
                             * Verifies a Block message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Block message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Block
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Block;

                            /**
                             * Creates a plain object from a Block message. Also converts values to other types if specified.
                             * @param message Block
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Block to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Paragraph. */
                        interface IParagraph {

                            /** Paragraph layout */
                            layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Paragraph detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                            /** Paragraph provenance */
                            provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);
                        }

                        /** Represents a Paragraph. */
                        class Paragraph implements IParagraph {

                            /**
                             * Constructs a new Paragraph.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IParagraph);

                            /** Paragraph layout. */
                            public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Paragraph detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /** Paragraph provenance. */
                            public provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);

                            /**
                             * Creates a new Paragraph instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Paragraph instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IParagraph): google.cloud.documentai.v1beta3.Document.Page.Paragraph;

                            /**
                             * Encodes the specified Paragraph message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Paragraph.verify|verify} messages.
                             * @param message Paragraph message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Paragraph message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Paragraph.verify|verify} messages.
                             * @param message Paragraph message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Paragraph message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Paragraph
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Paragraph;

                            /**
                             * Decodes a Paragraph message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Paragraph
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Paragraph;

                            /**
                             * Verifies a Paragraph message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Paragraph message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Paragraph
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Paragraph;

                            /**
                             * Creates a plain object from a Paragraph message. Also converts values to other types if specified.
                             * @param message Paragraph
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Paragraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Paragraph to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Line. */
                        interface ILine {

                            /** Line layout */
                            layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Line detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                            /** Line provenance */
                            provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);
                        }

                        /** Represents a Line. */
                        class Line implements ILine {

                            /**
                             * Constructs a new Line.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.ILine);

                            /** Line layout. */
                            public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Line detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /** Line provenance. */
                            public provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);

                            /**
                             * Creates a new Line instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Line instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.ILine): google.cloud.documentai.v1beta3.Document.Page.Line;

                            /**
                             * Encodes the specified Line message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Line.verify|verify} messages.
                             * @param message Line message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Line message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Line.verify|verify} messages.
                             * @param message Line message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.ILine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Line message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Line
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Line;

                            /**
                             * Decodes a Line message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Line
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Line;

                            /**
                             * Verifies a Line message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Line message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Line
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Line;

                            /**
                             * Creates a plain object from a Line message. Also converts values to other types if specified.
                             * @param message Line
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Line, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Line to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Token. */
                        interface IToken {

                            /** Token layout */
                            layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Token detectedBreak */
                            detectedBreak?: (google.cloud.documentai.v1beta3.Document.Page.Token.IDetectedBreak|null);

                            /** Token detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                            /** Token provenance */
                            provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);
                        }

                        /** Represents a Token. */
                        class Token implements IToken {

                            /**
                             * Constructs a new Token.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IToken);

                            /** Token layout. */
                            public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Token detectedBreak. */
                            public detectedBreak?: (google.cloud.documentai.v1beta3.Document.Page.Token.IDetectedBreak|null);

                            /** Token detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /** Token provenance. */
                            public provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);

                            /**
                             * Creates a new Token instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Token instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IToken): google.cloud.documentai.v1beta3.Document.Page.Token;

                            /**
                             * Encodes the specified Token message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Token.verify|verify} messages.
                             * @param message Token message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Token message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Token.verify|verify} messages.
                             * @param message Token message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Token message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Token
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Token;

                            /**
                             * Decodes a Token message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Token
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Token;

                            /**
                             * Verifies a Token message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Token message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Token
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Token;

                            /**
                             * Creates a plain object from a Token message. Also converts values to other types if specified.
                             * @param message Token
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Token to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Token {

                            /** Properties of a DetectedBreak. */
                            interface IDetectedBreak {

                                /** DetectedBreak type */
                                type?: (google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak.Type|keyof typeof google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak.Type|null);
                            }

                            /** Represents a DetectedBreak. */
                            class DetectedBreak implements IDetectedBreak {

                                /**
                                 * Constructs a new DetectedBreak.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.Token.IDetectedBreak);

                                /** DetectedBreak type. */
                                public type: (google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak.Type|keyof typeof google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak.Type);

                                /**
                                 * Creates a new DetectedBreak instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns DetectedBreak instance
                                 */
                                public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.Token.IDetectedBreak): google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak;

                                /**
                                 * Encodes the specified DetectedBreak message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak.verify|verify} messages.
                                 * @param message DetectedBreak message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.documentai.v1beta3.Document.Page.Token.IDetectedBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified DetectedBreak message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak.verify|verify} messages.
                                 * @param message DetectedBreak message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.Token.IDetectedBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a DetectedBreak message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns DetectedBreak
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak;

                                /**
                                 * Decodes a DetectedBreak message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns DetectedBreak
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak;

                                /**
                                 * Verifies a DetectedBreak message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a DetectedBreak message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns DetectedBreak
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak;

                                /**
                                 * Creates a plain object from a DetectedBreak message. Also converts values to other types if specified.
                                 * @param message DetectedBreak
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Token.DetectedBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this DetectedBreak to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            namespace DetectedBreak {

                                /** Type enum. */
                                enum Type {
                                    TYPE_UNSPECIFIED = 0,
                                    SPACE = 1,
                                    WIDE_SPACE = 2,
                                    HYPHEN = 3
                                }
                            }
                        }

                        /** Properties of a VisualElement. */
                        interface IVisualElement {

                            /** VisualElement layout */
                            layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** VisualElement type */
                            type?: (string|null);

                            /** VisualElement detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a VisualElement. */
                        class VisualElement implements IVisualElement {

                            /**
                             * Constructs a new VisualElement.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IVisualElement);

                            /** VisualElement layout. */
                            public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** VisualElement type. */
                            public type: string;

                            /** VisualElement detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new VisualElement instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns VisualElement instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IVisualElement): google.cloud.documentai.v1beta3.Document.Page.VisualElement;

                            /**
                             * Encodes the specified VisualElement message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.VisualElement.verify|verify} messages.
                             * @param message VisualElement message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IVisualElement, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified VisualElement message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.VisualElement.verify|verify} messages.
                             * @param message VisualElement message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IVisualElement, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a VisualElement message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns VisualElement
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.VisualElement;

                            /**
                             * Decodes a VisualElement message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns VisualElement
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.VisualElement;

                            /**
                             * Verifies a VisualElement message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a VisualElement message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns VisualElement
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.VisualElement;

                            /**
                             * Creates a plain object from a VisualElement message. Also converts values to other types if specified.
                             * @param message VisualElement
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.VisualElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this VisualElement to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Table. */
                        interface ITable {

                            /** Table layout */
                            layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Table headerRows */
                            headerRows?: (google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow[]|null);

                            /** Table bodyRows */
                            bodyRows?: (google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow[]|null);

                            /** Table detectedLanguages */
                            detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);
                        }

                        /** Represents a Table. */
                        class Table implements ITable {

                            /**
                             * Constructs a new Table.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.ITable);

                            /** Table layout. */
                            public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** Table headerRows. */
                            public headerRows: google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow[];

                            /** Table bodyRows. */
                            public bodyRows: google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow[];

                            /** Table detectedLanguages. */
                            public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /**
                             * Creates a new Table instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Table instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.ITable): google.cloud.documentai.v1beta3.Document.Page.Table;

                            /**
                             * Encodes the specified Table message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Table message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Table message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Table;

                            /**
                             * Decodes a Table message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Table;

                            /**
                             * Verifies a Table message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Table message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Table
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Table;

                            /**
                             * Creates a plain object from a Table message. Also converts values to other types if specified.
                             * @param message Table
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Table to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Table {

                            /** Properties of a TableRow. */
                            interface ITableRow {

                                /** TableRow cells */
                                cells?: (google.cloud.documentai.v1beta3.Document.Page.Table.ITableCell[]|null);
                            }

                            /** Represents a TableRow. */
                            class TableRow implements ITableRow {

                                /**
                                 * Constructs a new TableRow.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow);

                                /** TableRow cells. */
                                public cells: google.cloud.documentai.v1beta3.Document.Page.Table.ITableCell[];

                                /**
                                 * Creates a new TableRow instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns TableRow instance
                                 */
                                public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow): google.cloud.documentai.v1beta3.Document.Page.Table.TableRow;

                                /**
                                 * Encodes the specified TableRow message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Table.TableRow.verify|verify} messages.
                                 * @param message TableRow message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified TableRow message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Table.TableRow.verify|verify} messages.
                                 * @param message TableRow message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.Table.ITableRow, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a TableRow message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns TableRow
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Table.TableRow;

                                /**
                                 * Decodes a TableRow message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns TableRow
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Table.TableRow;

                                /**
                                 * Verifies a TableRow message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a TableRow message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns TableRow
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Table.TableRow;

                                /**
                                 * Creates a plain object from a TableRow message. Also converts values to other types if specified.
                                 * @param message TableRow
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Table.TableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this TableRow to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a TableCell. */
                            interface ITableCell {

                                /** TableCell layout */
                                layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                                /** TableCell rowSpan */
                                rowSpan?: (number|null);

                                /** TableCell colSpan */
                                colSpan?: (number|null);

                                /** TableCell detectedLanguages */
                                detectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);
                            }

                            /** Represents a TableCell. */
                            class TableCell implements ITableCell {

                                /**
                                 * Constructs a new TableCell.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.Table.ITableCell);

                                /** TableCell layout. */
                                public layout?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                                /** TableCell rowSpan. */
                                public rowSpan: number;

                                /** TableCell colSpan. */
                                public colSpan: number;

                                /** TableCell detectedLanguages. */
                                public detectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                                /**
                                 * Creates a new TableCell instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns TableCell instance
                                 */
                                public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.Table.ITableCell): google.cloud.documentai.v1beta3.Document.Page.Table.TableCell;

                                /**
                                 * Encodes the specified TableCell message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Table.TableCell.verify|verify} messages.
                                 * @param message TableCell message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.documentai.v1beta3.Document.Page.Table.ITableCell, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified TableCell message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.Table.TableCell.verify|verify} messages.
                                 * @param message TableCell message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.Table.ITableCell, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a TableCell message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns TableCell
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.Table.TableCell;

                                /**
                                 * Decodes a TableCell message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns TableCell
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.Table.TableCell;

                                /**
                                 * Verifies a TableCell message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a TableCell message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns TableCell
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.Table.TableCell;

                                /**
                                 * Creates a plain object from a TableCell message. Also converts values to other types if specified.
                                 * @param message TableCell
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.Table.TableCell, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this TableCell to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }

                        /** Properties of a FormField. */
                        interface IFormField {

                            /** FormField fieldName */
                            fieldName?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** FormField fieldValue */
                            fieldValue?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** FormField nameDetectedLanguages */
                            nameDetectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                            /** FormField valueDetectedLanguages */
                            valueDetectedLanguages?: (google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[]|null);

                            /** FormField valueType */
                            valueType?: (string|null);
                        }

                        /** Represents a FormField. */
                        class FormField implements IFormField {

                            /**
                             * Constructs a new FormField.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IFormField);

                            /** FormField fieldName. */
                            public fieldName?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** FormField fieldValue. */
                            public fieldValue?: (google.cloud.documentai.v1beta3.Document.Page.ILayout|null);

                            /** FormField nameDetectedLanguages. */
                            public nameDetectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /** FormField valueDetectedLanguages. */
                            public valueDetectedLanguages: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage[];

                            /** FormField valueType. */
                            public valueType: string;

                            /**
                             * Creates a new FormField instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns FormField instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IFormField): google.cloud.documentai.v1beta3.Document.Page.FormField;

                            /**
                             * Encodes the specified FormField message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.FormField.verify|verify} messages.
                             * @param message FormField message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IFormField, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified FormField message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.FormField.verify|verify} messages.
                             * @param message FormField message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IFormField, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a FormField message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns FormField
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.FormField;

                            /**
                             * Decodes a FormField message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns FormField
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.FormField;

                            /**
                             * Verifies a FormField message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a FormField message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns FormField
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.FormField;

                            /**
                             * Creates a plain object from a FormField message. Also converts values to other types if specified.
                             * @param message FormField
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.FormField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this FormField to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DetectedLanguage. */
                        interface IDetectedLanguage {

                            /** DetectedLanguage languageCode */
                            languageCode?: (string|null);

                            /** DetectedLanguage confidence */
                            confidence?: (number|null);
                        }

                        /** Represents a DetectedLanguage. */
                        class DetectedLanguage implements IDetectedLanguage {

                            /**
                             * Constructs a new DetectedLanguage.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage);

                            /** DetectedLanguage languageCode. */
                            public languageCode: string;

                            /** DetectedLanguage confidence. */
                            public confidence: number;

                            /**
                             * Creates a new DetectedLanguage instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DetectedLanguage instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage): google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage;

                            /**
                             * Encodes the specified DetectedLanguage message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage.verify|verify} messages.
                             * @param message DetectedLanguage message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DetectedLanguage message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage.verify|verify} messages.
                             * @param message DetectedLanguage message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Page.IDetectedLanguage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DetectedLanguage message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DetectedLanguage
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage;

                            /**
                             * Decodes a DetectedLanguage message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DetectedLanguage
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage;

                            /**
                             * Verifies a DetectedLanguage message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DetectedLanguage message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DetectedLanguage
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage;

                            /**
                             * Creates a plain object from a DetectedLanguage message. Also converts values to other types if specified.
                             * @param message DetectedLanguage
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Page.DetectedLanguage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DetectedLanguage to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an Entity. */
                    interface IEntity {

                        /** Entity textAnchor */
                        textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** Entity type */
                        type?: (string|null);

                        /** Entity mentionText */
                        mentionText?: (string|null);

                        /** Entity mentionId */
                        mentionId?: (string|null);

                        /** Entity confidence */
                        confidence?: (number|null);

                        /** Entity pageAnchor */
                        pageAnchor?: (google.cloud.documentai.v1beta3.Document.IPageAnchor|null);

                        /** Entity id */
                        id?: (string|null);

                        /** Entity normalizedValue */
                        normalizedValue?: (google.cloud.documentai.v1beta3.Document.Entity.INormalizedValue|null);

                        /** Entity properties */
                        properties?: (google.cloud.documentai.v1beta3.Document.IEntity[]|null);

                        /** Entity provenance */
                        provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);

                        /** Entity redacted */
                        redacted?: (boolean|null);
                    }

                    /** Represents an Entity. */
                    class Entity implements IEntity {

                        /**
                         * Constructs a new Entity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IEntity);

                        /** Entity textAnchor. */
                        public textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** Entity type. */
                        public type: string;

                        /** Entity mentionText. */
                        public mentionText: string;

                        /** Entity mentionId. */
                        public mentionId: string;

                        /** Entity confidence. */
                        public confidence: number;

                        /** Entity pageAnchor. */
                        public pageAnchor?: (google.cloud.documentai.v1beta3.Document.IPageAnchor|null);

                        /** Entity id. */
                        public id: string;

                        /** Entity normalizedValue. */
                        public normalizedValue?: (google.cloud.documentai.v1beta3.Document.Entity.INormalizedValue|null);

                        /** Entity properties. */
                        public properties: google.cloud.documentai.v1beta3.Document.IEntity[];

                        /** Entity provenance. */
                        public provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance|null);

                        /** Entity redacted. */
                        public redacted: boolean;

                        /**
                         * Creates a new Entity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Entity instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IEntity): google.cloud.documentai.v1beta3.Document.Entity;

                        /**
                         * Encodes the specified Entity message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Entity.verify|verify} messages.
                         * @param message Entity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Entity message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Entity.verify|verify} messages.
                         * @param message Entity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IEntity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Entity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Entity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Entity;

                        /**
                         * Decodes an Entity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Entity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Entity;

                        /**
                         * Verifies an Entity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Entity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Entity
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Entity;

                        /**
                         * Creates a plain object from an Entity message. Also converts values to other types if specified.
                         * @param message Entity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Entity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Entity {

                        /** Properties of a NormalizedValue. */
                        interface INormalizedValue {

                            /** NormalizedValue moneyValue */
                            moneyValue?: (google.type.IMoney|null);

                            /** NormalizedValue dateValue */
                            dateValue?: (google.type.IDate|null);

                            /** NormalizedValue datetimeValue */
                            datetimeValue?: (google.type.IDateTime|null);

                            /** NormalizedValue addressValue */
                            addressValue?: (google.type.IPostalAddress|null);

                            /** NormalizedValue booleanValue */
                            booleanValue?: (boolean|null);

                            /** NormalizedValue text */
                            text?: (string|null);
                        }

                        /** Represents a NormalizedValue. */
                        class NormalizedValue implements INormalizedValue {

                            /**
                             * Constructs a new NormalizedValue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Entity.INormalizedValue);

                            /** NormalizedValue moneyValue. */
                            public moneyValue?: (google.type.IMoney|null);

                            /** NormalizedValue dateValue. */
                            public dateValue?: (google.type.IDate|null);

                            /** NormalizedValue datetimeValue. */
                            public datetimeValue?: (google.type.IDateTime|null);

                            /** NormalizedValue addressValue. */
                            public addressValue?: (google.type.IPostalAddress|null);

                            /** NormalizedValue booleanValue. */
                            public booleanValue: boolean;

                            /** NormalizedValue text. */
                            public text: string;

                            /** NormalizedValue structuredValue. */
                            public structuredValue?: ("moneyValue"|"dateValue"|"datetimeValue"|"addressValue"|"booleanValue");

                            /**
                             * Creates a new NormalizedValue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NormalizedValue instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Entity.INormalizedValue): google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue;

                            /**
                             * Encodes the specified NormalizedValue message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue.verify|verify} messages.
                             * @param message NormalizedValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Entity.INormalizedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NormalizedValue message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue.verify|verify} messages.
                             * @param message NormalizedValue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Entity.INormalizedValue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NormalizedValue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NormalizedValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue;

                            /**
                             * Decodes a NormalizedValue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NormalizedValue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue;

                            /**
                             * Verifies a NormalizedValue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NormalizedValue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NormalizedValue
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue;

                            /**
                             * Creates a plain object from a NormalizedValue message. Also converts values to other types if specified.
                             * @param message NormalizedValue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Entity.NormalizedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NormalizedValue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of an EntityRelation. */
                    interface IEntityRelation {

                        /** EntityRelation subjectId */
                        subjectId?: (string|null);

                        /** EntityRelation objectId */
                        objectId?: (string|null);

                        /** EntityRelation relation */
                        relation?: (string|null);
                    }

                    /** Represents an EntityRelation. */
                    class EntityRelation implements IEntityRelation {

                        /**
                         * Constructs a new EntityRelation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IEntityRelation);

                        /** EntityRelation subjectId. */
                        public subjectId: string;

                        /** EntityRelation objectId. */
                        public objectId: string;

                        /** EntityRelation relation. */
                        public relation: string;

                        /**
                         * Creates a new EntityRelation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EntityRelation instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IEntityRelation): google.cloud.documentai.v1beta3.Document.EntityRelation;

                        /**
                         * Encodes the specified EntityRelation message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.EntityRelation.verify|verify} messages.
                         * @param message EntityRelation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IEntityRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EntityRelation message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.EntityRelation.verify|verify} messages.
                         * @param message EntityRelation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IEntityRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EntityRelation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EntityRelation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.EntityRelation;

                        /**
                         * Decodes an EntityRelation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EntityRelation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.EntityRelation;

                        /**
                         * Verifies an EntityRelation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EntityRelation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EntityRelation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.EntityRelation;

                        /**
                         * Creates a plain object from an EntityRelation message. Also converts values to other types if specified.
                         * @param message EntityRelation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.EntityRelation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EntityRelation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Translation. */
                    interface ITranslation {

                        /** Translation textAnchor */
                        textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** Translation languageCode */
                        languageCode?: (string|null);

                        /** Translation translatedText */
                        translatedText?: (string|null);

                        /** Translation provenance */
                        provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance[]|null);
                    }

                    /** Represents a Translation. */
                    class Translation implements ITranslation {

                        /**
                         * Constructs a new Translation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.ITranslation);

                        /** Translation textAnchor. */
                        public textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** Translation languageCode. */
                        public languageCode: string;

                        /** Translation translatedText. */
                        public translatedText: string;

                        /** Translation provenance. */
                        public provenance: google.cloud.documentai.v1beta3.Document.IProvenance[];

                        /**
                         * Creates a new Translation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Translation instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.ITranslation): google.cloud.documentai.v1beta3.Document.Translation;

                        /**
                         * Encodes the specified Translation message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Translation.verify|verify} messages.
                         * @param message Translation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Translation message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Translation.verify|verify} messages.
                         * @param message Translation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.ITranslation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Translation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Translation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Translation;

                        /**
                         * Decodes a Translation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Translation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Translation;

                        /**
                         * Verifies a Translation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Translation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Translation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Translation;

                        /**
                         * Creates a plain object from a Translation message. Also converts values to other types if specified.
                         * @param message Translation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.Translation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Translation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a TextAnchor. */
                    interface ITextAnchor {

                        /** TextAnchor textSegments */
                        textSegments?: (google.cloud.documentai.v1beta3.Document.TextAnchor.ITextSegment[]|null);

                        /** TextAnchor content */
                        content?: (string|null);
                    }

                    /** Represents a TextAnchor. */
                    class TextAnchor implements ITextAnchor {

                        /**
                         * Constructs a new TextAnchor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.ITextAnchor);

                        /** TextAnchor textSegments. */
                        public textSegments: google.cloud.documentai.v1beta3.Document.TextAnchor.ITextSegment[];

                        /** TextAnchor content. */
                        public content: string;

                        /**
                         * Creates a new TextAnchor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextAnchor instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.ITextAnchor): google.cloud.documentai.v1beta3.Document.TextAnchor;

                        /**
                         * Encodes the specified TextAnchor message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.TextAnchor.verify|verify} messages.
                         * @param message TextAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.ITextAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextAnchor message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.TextAnchor.verify|verify} messages.
                         * @param message TextAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.ITextAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextAnchor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.TextAnchor;

                        /**
                         * Decodes a TextAnchor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.TextAnchor;

                        /**
                         * Verifies a TextAnchor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextAnchor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextAnchor
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.TextAnchor;

                        /**
                         * Creates a plain object from a TextAnchor message. Also converts values to other types if specified.
                         * @param message TextAnchor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.TextAnchor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextAnchor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace TextAnchor {

                        /** Properties of a TextSegment. */
                        interface ITextSegment {

                            /** TextSegment startIndex */
                            startIndex?: (number|Long|string|null);

                            /** TextSegment endIndex */
                            endIndex?: (number|Long|string|null);
                        }

                        /** Represents a TextSegment. */
                        class TextSegment implements ITextSegment {

                            /**
                             * Constructs a new TextSegment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.TextAnchor.ITextSegment);

                            /** TextSegment startIndex. */
                            public startIndex: (number|Long|string);

                            /** TextSegment endIndex. */
                            public endIndex: (number|Long|string);

                            /**
                             * Creates a new TextSegment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextSegment instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.TextAnchor.ITextSegment): google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment;

                            /**
                             * Encodes the specified TextSegment message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment.verify|verify} messages.
                             * @param message TextSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.TextAnchor.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextSegment message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment.verify|verify} messages.
                             * @param message TextSegment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.TextAnchor.ITextSegment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextSegment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment;

                            /**
                             * Decodes a TextSegment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextSegment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment;

                            /**
                             * Verifies a TextSegment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextSegment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextSegment
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment;

                            /**
                             * Creates a plain object from a TextSegment message. Also converts values to other types if specified.
                             * @param message TextSegment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.TextAnchor.TextSegment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextSegment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a PageAnchor. */
                    interface IPageAnchor {

                        /** PageAnchor pageRefs */
                        pageRefs?: (google.cloud.documentai.v1beta3.Document.PageAnchor.IPageRef[]|null);
                    }

                    /** Represents a PageAnchor. */
                    class PageAnchor implements IPageAnchor {

                        /**
                         * Constructs a new PageAnchor.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IPageAnchor);

                        /** PageAnchor pageRefs. */
                        public pageRefs: google.cloud.documentai.v1beta3.Document.PageAnchor.IPageRef[];

                        /**
                         * Creates a new PageAnchor instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PageAnchor instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IPageAnchor): google.cloud.documentai.v1beta3.Document.PageAnchor;

                        /**
                         * Encodes the specified PageAnchor message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.PageAnchor.verify|verify} messages.
                         * @param message PageAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IPageAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PageAnchor message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.PageAnchor.verify|verify} messages.
                         * @param message PageAnchor message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IPageAnchor, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PageAnchor message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PageAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.PageAnchor;

                        /**
                         * Decodes a PageAnchor message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PageAnchor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.PageAnchor;

                        /**
                         * Verifies a PageAnchor message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PageAnchor message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PageAnchor
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.PageAnchor;

                        /**
                         * Creates a plain object from a PageAnchor message. Also converts values to other types if specified.
                         * @param message PageAnchor
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.PageAnchor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PageAnchor to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace PageAnchor {

                        /** Properties of a PageRef. */
                        interface IPageRef {

                            /** PageRef page */
                            page?: (number|Long|string|null);

                            /** PageRef layoutType */
                            layoutType?: (google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef.LayoutType|keyof typeof google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef.LayoutType|null);

                            /** PageRef layoutId */
                            layoutId?: (string|null);

                            /** PageRef boundingPoly */
                            boundingPoly?: (google.cloud.documentai.v1beta3.IBoundingPoly|null);
                        }

                        /** Represents a PageRef. */
                        class PageRef implements IPageRef {

                            /**
                             * Constructs a new PageRef.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.PageAnchor.IPageRef);

                            /** PageRef page. */
                            public page: (number|Long|string);

                            /** PageRef layoutType. */
                            public layoutType: (google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef.LayoutType|keyof typeof google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef.LayoutType);

                            /** PageRef layoutId. */
                            public layoutId: string;

                            /** PageRef boundingPoly. */
                            public boundingPoly?: (google.cloud.documentai.v1beta3.IBoundingPoly|null);

                            /**
                             * Creates a new PageRef instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PageRef instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.PageAnchor.IPageRef): google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef;

                            /**
                             * Encodes the specified PageRef message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef.verify|verify} messages.
                             * @param message PageRef message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.PageAnchor.IPageRef, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PageRef message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef.verify|verify} messages.
                             * @param message PageRef message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.PageAnchor.IPageRef, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PageRef message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PageRef
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef;

                            /**
                             * Decodes a PageRef message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PageRef
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef;

                            /**
                             * Verifies a PageRef message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PageRef message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PageRef
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef;

                            /**
                             * Creates a plain object from a PageRef message. Also converts values to other types if specified.
                             * @param message PageRef
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.PageAnchor.PageRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PageRef to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace PageRef {

                            /** LayoutType enum. */
                            enum LayoutType {
                                LAYOUT_TYPE_UNSPECIFIED = 0,
                                BLOCK = 1,
                                PARAGRAPH = 2,
                                LINE = 3,
                                TOKEN = 4,
                                VISUAL_ELEMENT = 5,
                                TABLE = 6,
                                FORM_FIELD = 7
                            }
                        }
                    }

                    /** Properties of a Provenance. */
                    interface IProvenance {

                        /** Provenance revision */
                        revision?: (number|null);

                        /** Provenance id */
                        id?: (number|null);

                        /** Provenance parents */
                        parents?: (google.cloud.documentai.v1beta3.Document.Provenance.IParent[]|null);

                        /** Provenance type */
                        type?: (google.cloud.documentai.v1beta3.Document.Provenance.OperationType|keyof typeof google.cloud.documentai.v1beta3.Document.Provenance.OperationType|null);
                    }

                    /** Represents a Provenance. */
                    class Provenance implements IProvenance {

                        /**
                         * Constructs a new Provenance.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IProvenance);

                        /** Provenance revision. */
                        public revision: number;

                        /** Provenance id. */
                        public id: number;

                        /** Provenance parents. */
                        public parents: google.cloud.documentai.v1beta3.Document.Provenance.IParent[];

                        /** Provenance type. */
                        public type: (google.cloud.documentai.v1beta3.Document.Provenance.OperationType|keyof typeof google.cloud.documentai.v1beta3.Document.Provenance.OperationType);

                        /**
                         * Creates a new Provenance instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Provenance instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IProvenance): google.cloud.documentai.v1beta3.Document.Provenance;

                        /**
                         * Encodes the specified Provenance message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Provenance.verify|verify} messages.
                         * @param message Provenance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Provenance message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Provenance.verify|verify} messages.
                         * @param message Provenance message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Provenance message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Provenance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Provenance;

                        /**
                         * Decodes a Provenance message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Provenance
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Provenance;

                        /**
                         * Verifies a Provenance message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Provenance message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Provenance
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Provenance;

                        /**
                         * Creates a plain object from a Provenance message. Also converts values to other types if specified.
                         * @param message Provenance
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.Provenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Provenance to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Provenance {

                        /** Properties of a Parent. */
                        interface IParent {

                            /** Parent revision */
                            revision?: (number|null);

                            /** Parent id */
                            id?: (number|null);
                        }

                        /** Represents a Parent. */
                        class Parent implements IParent {

                            /**
                             * Constructs a new Parent.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Provenance.IParent);

                            /** Parent revision. */
                            public revision: number;

                            /** Parent id. */
                            public id: number;

                            /**
                             * Creates a new Parent instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Parent instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Provenance.IParent): google.cloud.documentai.v1beta3.Document.Provenance.Parent;

                            /**
                             * Encodes the specified Parent message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Provenance.Parent.verify|verify} messages.
                             * @param message Parent message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Provenance.IParent, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Parent message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Provenance.Parent.verify|verify} messages.
                             * @param message Parent message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Provenance.IParent, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Parent message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Parent
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Provenance.Parent;

                            /**
                             * Decodes a Parent message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Parent
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Provenance.Parent;

                            /**
                             * Verifies a Parent message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Parent message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Parent
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Provenance.Parent;

                            /**
                             * Creates a plain object from a Parent message. Also converts values to other types if specified.
                             * @param message Parent
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Provenance.Parent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Parent to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** OperationType enum. */
                        enum OperationType {
                            OPERATION_TYPE_UNSPECIFIED = 0,
                            ADD = 1,
                            REMOVE = 2,
                            REPLACE = 3,
                            EVAL_REQUESTED = 4,
                            EVAL_APPROVED = 5
                        }
                    }

                    /** Properties of a Revision. */
                    interface IRevision {

                        /** Revision agent */
                        agent?: (string|null);

                        /** Revision processor */
                        processor?: (string|null);

                        /** Revision id */
                        id?: (string|null);

                        /** Revision parent */
                        parent?: (number[]|null);

                        /** Revision createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Revision humanReview */
                        humanReview?: (google.cloud.documentai.v1beta3.Document.Revision.IHumanReview|null);
                    }

                    /** Represents a Revision. */
                    class Revision implements IRevision {

                        /**
                         * Constructs a new Revision.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.IRevision);

                        /** Revision agent. */
                        public agent: string;

                        /** Revision processor. */
                        public processor: string;

                        /** Revision id. */
                        public id: string;

                        /** Revision parent. */
                        public parent: number[];

                        /** Revision createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Revision humanReview. */
                        public humanReview?: (google.cloud.documentai.v1beta3.Document.Revision.IHumanReview|null);

                        /** Revision source. */
                        public source?: ("agent"|"processor");

                        /**
                         * Creates a new Revision instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Revision instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.IRevision): google.cloud.documentai.v1beta3.Document.Revision;

                        /**
                         * Encodes the specified Revision message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Revision.verify|verify} messages.
                         * @param message Revision message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.IRevision, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Revision message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Revision.verify|verify} messages.
                         * @param message Revision message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.IRevision, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Revision message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Revision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Revision;

                        /**
                         * Decodes a Revision message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Revision
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Revision;

                        /**
                         * Verifies a Revision message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Revision message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Revision
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Revision;

                        /**
                         * Creates a plain object from a Revision message. Also converts values to other types if specified.
                         * @param message Revision
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.Revision, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Revision to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Revision {

                        /** Properties of a HumanReview. */
                        interface IHumanReview {

                            /** HumanReview state */
                            state?: (string|null);

                            /** HumanReview stateMessage */
                            stateMessage?: (string|null);
                        }

                        /** Represents a HumanReview. */
                        class HumanReview implements IHumanReview {

                            /**
                             * Constructs a new HumanReview.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.documentai.v1beta3.Document.Revision.IHumanReview);

                            /** HumanReview state. */
                            public state: string;

                            /** HumanReview stateMessage. */
                            public stateMessage: string;

                            /**
                             * Creates a new HumanReview instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HumanReview instance
                             */
                            public static create(properties?: google.cloud.documentai.v1beta3.Document.Revision.IHumanReview): google.cloud.documentai.v1beta3.Document.Revision.HumanReview;

                            /**
                             * Encodes the specified HumanReview message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Revision.HumanReview.verify|verify} messages.
                             * @param message HumanReview message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.documentai.v1beta3.Document.Revision.IHumanReview, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified HumanReview message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.Revision.HumanReview.verify|verify} messages.
                             * @param message HumanReview message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.Revision.IHumanReview, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HumanReview message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HumanReview
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.Revision.HumanReview;

                            /**
                             * Decodes a HumanReview message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns HumanReview
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.Revision.HumanReview;

                            /**
                             * Verifies a HumanReview message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a HumanReview message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns HumanReview
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.Revision.HumanReview;

                            /**
                             * Creates a plain object from a HumanReview message. Also converts values to other types if specified.
                             * @param message HumanReview
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.documentai.v1beta3.Document.Revision.HumanReview, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this HumanReview to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a TextChange. */
                    interface ITextChange {

                        /** TextChange textAnchor */
                        textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** TextChange changedText */
                        changedText?: (string|null);

                        /** TextChange provenance */
                        provenance?: (google.cloud.documentai.v1beta3.Document.IProvenance[]|null);
                    }

                    /** Represents a TextChange. */
                    class TextChange implements ITextChange {

                        /**
                         * Constructs a new TextChange.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.Document.ITextChange);

                        /** TextChange textAnchor. */
                        public textAnchor?: (google.cloud.documentai.v1beta3.Document.ITextAnchor|null);

                        /** TextChange changedText. */
                        public changedText: string;

                        /** TextChange provenance. */
                        public provenance: google.cloud.documentai.v1beta3.Document.IProvenance[];

                        /**
                         * Creates a new TextChange instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextChange instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.Document.ITextChange): google.cloud.documentai.v1beta3.Document.TextChange;

                        /**
                         * Encodes the specified TextChange message. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.TextChange.verify|verify} messages.
                         * @param message TextChange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.Document.ITextChange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextChange message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Document.TextChange.verify|verify} messages.
                         * @param message TextChange message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.Document.ITextChange, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextChange message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Document.TextChange;

                        /**
                         * Decodes a TextChange message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextChange
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Document.TextChange;

                        /**
                         * Verifies a TextChange message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextChange message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextChange
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Document.TextChange;

                        /**
                         * Creates a plain object from a TextChange message. Also converts values to other types if specified.
                         * @param message TextChange
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.Document.TextChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextChange to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Vertex. */
                interface IVertex {

                    /** Vertex x */
                    x?: (number|null);

                    /** Vertex y */
                    y?: (number|null);
                }

                /** Represents a Vertex. */
                class Vertex implements IVertex {

                    /**
                     * Constructs a new Vertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IVertex);

                    /** Vertex x. */
                    public x: number;

                    /** Vertex y. */
                    public y: number;

                    /**
                     * Creates a new Vertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vertex instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IVertex): google.cloud.documentai.v1beta3.Vertex;

                    /**
                     * Encodes the specified Vertex message. Does not implicitly {@link google.cloud.documentai.v1beta3.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Vertex message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.Vertex.verify|verify} messages.
                     * @param message Vertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.Vertex;

                    /**
                     * Decodes a Vertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Vertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.Vertex;

                    /**
                     * Verifies a Vertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Vertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Vertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.Vertex;

                    /**
                     * Creates a plain object from a Vertex message. Also converts values to other types if specified.
                     * @param message Vertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.Vertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Vertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a NormalizedVertex. */
                interface INormalizedVertex {

                    /** NormalizedVertex x */
                    x?: (number|null);

                    /** NormalizedVertex y */
                    y?: (number|null);
                }

                /** Represents a NormalizedVertex. */
                class NormalizedVertex implements INormalizedVertex {

                    /**
                     * Constructs a new NormalizedVertex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.INormalizedVertex);

                    /** NormalizedVertex x. */
                    public x: number;

                    /** NormalizedVertex y. */
                    public y: number;

                    /**
                     * Creates a new NormalizedVertex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NormalizedVertex instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.INormalizedVertex): google.cloud.documentai.v1beta3.NormalizedVertex;

                    /**
                     * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.documentai.v1beta3.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.NormalizedVertex.verify|verify} messages.
                     * @param message NormalizedVertex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.INormalizedVertex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.NormalizedVertex;

                    /**
                     * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NormalizedVertex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.NormalizedVertex;

                    /**
                     * Verifies a NormalizedVertex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NormalizedVertex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NormalizedVertex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.NormalizedVertex;

                    /**
                     * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                     * @param message NormalizedVertex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.NormalizedVertex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NormalizedVertex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BoundingPoly. */
                interface IBoundingPoly {

                    /** BoundingPoly vertices */
                    vertices?: (google.cloud.documentai.v1beta3.IVertex[]|null);

                    /** BoundingPoly normalizedVertices */
                    normalizedVertices?: (google.cloud.documentai.v1beta3.INormalizedVertex[]|null);
                }

                /** Represents a BoundingPoly. */
                class BoundingPoly implements IBoundingPoly {

                    /**
                     * Constructs a new BoundingPoly.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IBoundingPoly);

                    /** BoundingPoly vertices. */
                    public vertices: google.cloud.documentai.v1beta3.IVertex[];

                    /** BoundingPoly normalizedVertices. */
                    public normalizedVertices: google.cloud.documentai.v1beta3.INormalizedVertex[];

                    /**
                     * Creates a new BoundingPoly instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BoundingPoly instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IBoundingPoly): google.cloud.documentai.v1beta3.BoundingPoly;

                    /**
                     * Encodes the specified BoundingPoly message. Does not implicitly {@link google.cloud.documentai.v1beta3.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BoundingPoly message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BoundingPoly.verify|verify} messages.
                     * @param message BoundingPoly message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IBoundingPoly, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BoundingPoly;

                    /**
                     * Decodes a BoundingPoly message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BoundingPoly
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BoundingPoly;

                    /**
                     * Verifies a BoundingPoly message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BoundingPoly message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BoundingPoly
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BoundingPoly;

                    /**
                     * Creates a plain object from a BoundingPoly message. Also converts values to other types if specified.
                     * @param message BoundingPoly
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.BoundingPoly, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BoundingPoly to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RawDocument. */
                interface IRawDocument {

                    /** RawDocument content */
                    content?: (Uint8Array|string|null);

                    /** RawDocument mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a RawDocument. */
                class RawDocument implements IRawDocument {

                    /**
                     * Constructs a new RawDocument.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IRawDocument);

                    /** RawDocument content. */
                    public content: (Uint8Array|string);

                    /** RawDocument mimeType. */
                    public mimeType: string;

                    /**
                     * Creates a new RawDocument instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RawDocument instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IRawDocument): google.cloud.documentai.v1beta3.RawDocument;

                    /**
                     * Encodes the specified RawDocument message. Does not implicitly {@link google.cloud.documentai.v1beta3.RawDocument.verify|verify} messages.
                     * @param message RawDocument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IRawDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RawDocument message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.RawDocument.verify|verify} messages.
                     * @param message RawDocument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IRawDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RawDocument message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RawDocument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.RawDocument;

                    /**
                     * Decodes a RawDocument message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RawDocument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.RawDocument;

                    /**
                     * Verifies a RawDocument message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RawDocument message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RawDocument
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.RawDocument;

                    /**
                     * Creates a plain object from a RawDocument message. Also converts values to other types if specified.
                     * @param message RawDocument
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.RawDocument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RawDocument to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDocument. */
                interface IGcsDocument {

                    /** GcsDocument gcsUri */
                    gcsUri?: (string|null);

                    /** GcsDocument mimeType */
                    mimeType?: (string|null);
                }

                /** Represents a GcsDocument. */
                class GcsDocument implements IGcsDocument {

                    /**
                     * Constructs a new GcsDocument.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IGcsDocument);

                    /** GcsDocument gcsUri. */
                    public gcsUri: string;

                    /** GcsDocument mimeType. */
                    public mimeType: string;

                    /**
                     * Creates a new GcsDocument instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDocument instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IGcsDocument): google.cloud.documentai.v1beta3.GcsDocument;

                    /**
                     * Encodes the specified GcsDocument message. Does not implicitly {@link google.cloud.documentai.v1beta3.GcsDocument.verify|verify} messages.
                     * @param message GcsDocument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IGcsDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDocument message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.GcsDocument.verify|verify} messages.
                     * @param message GcsDocument message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IGcsDocument, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDocument message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDocument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.GcsDocument;

                    /**
                     * Decodes a GcsDocument message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDocument
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.GcsDocument;

                    /**
                     * Verifies a GcsDocument message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDocument message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDocument
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.GcsDocument;

                    /**
                     * Creates a plain object from a GcsDocument message. Also converts values to other types if specified.
                     * @param message GcsDocument
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.GcsDocument, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDocument to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDocuments. */
                interface IGcsDocuments {

                    /** GcsDocuments documents */
                    documents?: (google.cloud.documentai.v1beta3.IGcsDocument[]|null);
                }

                /** Represents a GcsDocuments. */
                class GcsDocuments implements IGcsDocuments {

                    /**
                     * Constructs a new GcsDocuments.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IGcsDocuments);

                    /** GcsDocuments documents. */
                    public documents: google.cloud.documentai.v1beta3.IGcsDocument[];

                    /**
                     * Creates a new GcsDocuments instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDocuments instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IGcsDocuments): google.cloud.documentai.v1beta3.GcsDocuments;

                    /**
                     * Encodes the specified GcsDocuments message. Does not implicitly {@link google.cloud.documentai.v1beta3.GcsDocuments.verify|verify} messages.
                     * @param message GcsDocuments message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IGcsDocuments, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDocuments message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.GcsDocuments.verify|verify} messages.
                     * @param message GcsDocuments message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IGcsDocuments, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDocuments message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDocuments
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.GcsDocuments;

                    /**
                     * Decodes a GcsDocuments message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDocuments
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.GcsDocuments;

                    /**
                     * Verifies a GcsDocuments message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDocuments message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDocuments
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.GcsDocuments;

                    /**
                     * Creates a plain object from a GcsDocuments message. Also converts values to other types if specified.
                     * @param message GcsDocuments
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.GcsDocuments, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDocuments to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsPrefix. */
                interface IGcsPrefix {

                    /** GcsPrefix gcsUriPrefix */
                    gcsUriPrefix?: (string|null);
                }

                /** Represents a GcsPrefix. */
                class GcsPrefix implements IGcsPrefix {

                    /**
                     * Constructs a new GcsPrefix.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IGcsPrefix);

                    /** GcsPrefix gcsUriPrefix. */
                    public gcsUriPrefix: string;

                    /**
                     * Creates a new GcsPrefix instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsPrefix instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IGcsPrefix): google.cloud.documentai.v1beta3.GcsPrefix;

                    /**
                     * Encodes the specified GcsPrefix message. Does not implicitly {@link google.cloud.documentai.v1beta3.GcsPrefix.verify|verify} messages.
                     * @param message GcsPrefix message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IGcsPrefix, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsPrefix message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.GcsPrefix.verify|verify} messages.
                     * @param message GcsPrefix message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IGcsPrefix, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsPrefix message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsPrefix
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.GcsPrefix;

                    /**
                     * Decodes a GcsPrefix message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsPrefix
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.GcsPrefix;

                    /**
                     * Verifies a GcsPrefix message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsPrefix message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsPrefix
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.GcsPrefix;

                    /**
                     * Creates a plain object from a GcsPrefix message. Also converts values to other types if specified.
                     * @param message GcsPrefix
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.GcsPrefix, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsPrefix to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchDocumentsInputConfig. */
                interface IBatchDocumentsInputConfig {

                    /** BatchDocumentsInputConfig gcsPrefix */
                    gcsPrefix?: (google.cloud.documentai.v1beta3.IGcsPrefix|null);

                    /** BatchDocumentsInputConfig gcsDocuments */
                    gcsDocuments?: (google.cloud.documentai.v1beta3.IGcsDocuments|null);
                }

                /** Represents a BatchDocumentsInputConfig. */
                class BatchDocumentsInputConfig implements IBatchDocumentsInputConfig {

                    /**
                     * Constructs a new BatchDocumentsInputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IBatchDocumentsInputConfig);

                    /** BatchDocumentsInputConfig gcsPrefix. */
                    public gcsPrefix?: (google.cloud.documentai.v1beta3.IGcsPrefix|null);

                    /** BatchDocumentsInputConfig gcsDocuments. */
                    public gcsDocuments?: (google.cloud.documentai.v1beta3.IGcsDocuments|null);

                    /** BatchDocumentsInputConfig source. */
                    public source?: ("gcsPrefix"|"gcsDocuments");

                    /**
                     * Creates a new BatchDocumentsInputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchDocumentsInputConfig instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IBatchDocumentsInputConfig): google.cloud.documentai.v1beta3.BatchDocumentsInputConfig;

                    /**
                     * Encodes the specified BatchDocumentsInputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchDocumentsInputConfig.verify|verify} messages.
                     * @param message BatchDocumentsInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IBatchDocumentsInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchDocumentsInputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchDocumentsInputConfig.verify|verify} messages.
                     * @param message BatchDocumentsInputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IBatchDocumentsInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchDocumentsInputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchDocumentsInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchDocumentsInputConfig;

                    /**
                     * Decodes a BatchDocumentsInputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchDocumentsInputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchDocumentsInputConfig;

                    /**
                     * Verifies a BatchDocumentsInputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchDocumentsInputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchDocumentsInputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchDocumentsInputConfig;

                    /**
                     * Creates a plain object from a BatchDocumentsInputConfig message. Also converts values to other types if specified.
                     * @param message BatchDocumentsInputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.BatchDocumentsInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchDocumentsInputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DocumentOutputConfig. */
                interface IDocumentOutputConfig {

                    /** DocumentOutputConfig gcsOutputConfig */
                    gcsOutputConfig?: (google.cloud.documentai.v1beta3.DocumentOutputConfig.IGcsOutputConfig|null);
                }

                /** Represents a DocumentOutputConfig. */
                class DocumentOutputConfig implements IDocumentOutputConfig {

                    /**
                     * Constructs a new DocumentOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IDocumentOutputConfig);

                    /** DocumentOutputConfig gcsOutputConfig. */
                    public gcsOutputConfig?: (google.cloud.documentai.v1beta3.DocumentOutputConfig.IGcsOutputConfig|null);

                    /** DocumentOutputConfig destination. */
                    public destination?: "gcsOutputConfig";

                    /**
                     * Creates a new DocumentOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DocumentOutputConfig instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IDocumentOutputConfig): google.cloud.documentai.v1beta3.DocumentOutputConfig;

                    /**
                     * Encodes the specified DocumentOutputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta3.DocumentOutputConfig.verify|verify} messages.
                     * @param message DocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DocumentOutputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.DocumentOutputConfig.verify|verify} messages.
                     * @param message DocumentOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IDocumentOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DocumentOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.DocumentOutputConfig;

                    /**
                     * Decodes a DocumentOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DocumentOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.DocumentOutputConfig;

                    /**
                     * Verifies a DocumentOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DocumentOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DocumentOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.DocumentOutputConfig;

                    /**
                     * Creates a plain object from a DocumentOutputConfig message. Also converts values to other types if specified.
                     * @param message DocumentOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.DocumentOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DocumentOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DocumentOutputConfig {

                    /** Properties of a GcsOutputConfig. */
                    interface IGcsOutputConfig {

                        /** GcsOutputConfig gcsUri */
                        gcsUri?: (string|null);
                    }

                    /** Represents a GcsOutputConfig. */
                    class GcsOutputConfig implements IGcsOutputConfig {

                        /**
                         * Constructs a new GcsOutputConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.DocumentOutputConfig.IGcsOutputConfig);

                        /** GcsOutputConfig gcsUri. */
                        public gcsUri: string;

                        /**
                         * Creates a new GcsOutputConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GcsOutputConfig instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.DocumentOutputConfig.IGcsOutputConfig): google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig;

                        /**
                         * Encodes the specified GcsOutputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.verify|verify} messages.
                         * @param message GcsOutputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.DocumentOutputConfig.IGcsOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GcsOutputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig.verify|verify} messages.
                         * @param message GcsOutputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.DocumentOutputConfig.IGcsOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GcsOutputConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GcsOutputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig;

                        /**
                         * Decodes a GcsOutputConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GcsOutputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig;

                        /**
                         * Verifies a GcsOutputConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GcsOutputConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GcsOutputConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig;

                        /**
                         * Creates a plain object from a GcsOutputConfig message. Also converts values to other types if specified.
                         * @param message GcsOutputConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.DocumentOutputConfig.GcsOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GcsOutputConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Represents a DocumentProcessorService */
                class DocumentProcessorService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DocumentProcessorService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DocumentProcessorService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DocumentProcessorService;

                    /**
                     * Calls ProcessDocument.
                     * @param request ProcessRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ProcessResponse
                     */
                    public processDocument(request: google.cloud.documentai.v1beta3.IProcessRequest, callback: google.cloud.documentai.v1beta3.DocumentProcessorService.ProcessDocumentCallback): void;

                    /**
                     * Calls ProcessDocument.
                     * @param request ProcessRequest message or plain object
                     * @returns Promise
                     */
                    public processDocument(request: google.cloud.documentai.v1beta3.IProcessRequest): Promise<google.cloud.documentai.v1beta3.ProcessResponse>;

                    /**
                     * Calls BatchProcessDocuments.
                     * @param request BatchProcessRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchProcessDocuments(request: google.cloud.documentai.v1beta3.IBatchProcessRequest, callback: google.cloud.documentai.v1beta3.DocumentProcessorService.BatchProcessDocumentsCallback): void;

                    /**
                     * Calls BatchProcessDocuments.
                     * @param request BatchProcessRequest message or plain object
                     * @returns Promise
                     */
                    public batchProcessDocuments(request: google.cloud.documentai.v1beta3.IBatchProcessRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ReviewDocument.
                     * @param request ReviewDocumentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public reviewDocument(request: google.cloud.documentai.v1beta3.IReviewDocumentRequest, callback: google.cloud.documentai.v1beta3.DocumentProcessorService.ReviewDocumentCallback): void;

                    /**
                     * Calls ReviewDocument.
                     * @param request ReviewDocumentRequest message or plain object
                     * @returns Promise
                     */
                    public reviewDocument(request: google.cloud.documentai.v1beta3.IReviewDocumentRequest): Promise<google.longrunning.Operation>;
                }

                namespace DocumentProcessorService {

                    /**
                     * Callback as used by {@link google.cloud.documentai.v1beta3.DocumentProcessorService#processDocument}.
                     * @param error Error, if any
                     * @param [response] ProcessResponse
                     */
                    type ProcessDocumentCallback = (error: (Error|null), response?: google.cloud.documentai.v1beta3.ProcessResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.documentai.v1beta3.DocumentProcessorService#batchProcessDocuments}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchProcessDocumentsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.documentai.v1beta3.DocumentProcessorService#reviewDocument}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ReviewDocumentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ProcessRequest. */
                interface IProcessRequest {

                    /** ProcessRequest inlineDocument */
                    inlineDocument?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ProcessRequest rawDocument */
                    rawDocument?: (google.cloud.documentai.v1beta3.IRawDocument|null);

                    /** ProcessRequest name */
                    name?: (string|null);

                    /** ProcessRequest document */
                    document?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ProcessRequest skipHumanReview */
                    skipHumanReview?: (boolean|null);
                }

                /** Represents a ProcessRequest. */
                class ProcessRequest implements IProcessRequest {

                    /**
                     * Constructs a new ProcessRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IProcessRequest);

                    /** ProcessRequest inlineDocument. */
                    public inlineDocument?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ProcessRequest rawDocument. */
                    public rawDocument?: (google.cloud.documentai.v1beta3.IRawDocument|null);

                    /** ProcessRequest name. */
                    public name: string;

                    /** ProcessRequest document. */
                    public document?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ProcessRequest skipHumanReview. */
                    public skipHumanReview: boolean;

                    /** ProcessRequest source. */
                    public source?: ("inlineDocument"|"rawDocument");

                    /**
                     * Creates a new ProcessRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProcessRequest instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IProcessRequest): google.cloud.documentai.v1beta3.ProcessRequest;

                    /**
                     * Encodes the specified ProcessRequest message. Does not implicitly {@link google.cloud.documentai.v1beta3.ProcessRequest.verify|verify} messages.
                     * @param message ProcessRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProcessRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.ProcessRequest.verify|verify} messages.
                     * @param message ProcessRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProcessRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProcessRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.ProcessRequest;

                    /**
                     * Decodes a ProcessRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProcessRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.ProcessRequest;

                    /**
                     * Verifies a ProcessRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProcessRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProcessRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.ProcessRequest;

                    /**
                     * Creates a plain object from a ProcessRequest message. Also converts values to other types if specified.
                     * @param message ProcessRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.ProcessRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProcessRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HumanReviewStatus. */
                interface IHumanReviewStatus {

                    /** HumanReviewStatus state */
                    state?: (google.cloud.documentai.v1beta3.HumanReviewStatus.State|keyof typeof google.cloud.documentai.v1beta3.HumanReviewStatus.State|null);

                    /** HumanReviewStatus stateMessage */
                    stateMessage?: (string|null);

                    /** HumanReviewStatus humanReviewOperation */
                    humanReviewOperation?: (string|null);
                }

                /** Represents a HumanReviewStatus. */
                class HumanReviewStatus implements IHumanReviewStatus {

                    /**
                     * Constructs a new HumanReviewStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IHumanReviewStatus);

                    /** HumanReviewStatus state. */
                    public state: (google.cloud.documentai.v1beta3.HumanReviewStatus.State|keyof typeof google.cloud.documentai.v1beta3.HumanReviewStatus.State);

                    /** HumanReviewStatus stateMessage. */
                    public stateMessage: string;

                    /** HumanReviewStatus humanReviewOperation. */
                    public humanReviewOperation: string;

                    /**
                     * Creates a new HumanReviewStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HumanReviewStatus instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IHumanReviewStatus): google.cloud.documentai.v1beta3.HumanReviewStatus;

                    /**
                     * Encodes the specified HumanReviewStatus message. Does not implicitly {@link google.cloud.documentai.v1beta3.HumanReviewStatus.verify|verify} messages.
                     * @param message HumanReviewStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IHumanReviewStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HumanReviewStatus message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.HumanReviewStatus.verify|verify} messages.
                     * @param message HumanReviewStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IHumanReviewStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HumanReviewStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HumanReviewStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.HumanReviewStatus;

                    /**
                     * Decodes a HumanReviewStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HumanReviewStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.HumanReviewStatus;

                    /**
                     * Verifies a HumanReviewStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HumanReviewStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HumanReviewStatus
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.HumanReviewStatus;

                    /**
                     * Creates a plain object from a HumanReviewStatus message. Also converts values to other types if specified.
                     * @param message HumanReviewStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.HumanReviewStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HumanReviewStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace HumanReviewStatus {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        SKIPPED = 1,
                        VALIDATION_PASSED = 2,
                        IN_PROGRESS = 3,
                        ERROR = 4
                    }
                }

                /** Properties of a ProcessResponse. */
                interface IProcessResponse {

                    /** ProcessResponse document */
                    document?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ProcessResponse humanReviewOperation */
                    humanReviewOperation?: (string|null);

                    /** ProcessResponse humanReviewStatus */
                    humanReviewStatus?: (google.cloud.documentai.v1beta3.IHumanReviewStatus|null);
                }

                /** Represents a ProcessResponse. */
                class ProcessResponse implements IProcessResponse {

                    /**
                     * Constructs a new ProcessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IProcessResponse);

                    /** ProcessResponse document. */
                    public document?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ProcessResponse humanReviewOperation. */
                    public humanReviewOperation: string;

                    /** ProcessResponse humanReviewStatus. */
                    public humanReviewStatus?: (google.cloud.documentai.v1beta3.IHumanReviewStatus|null);

                    /**
                     * Creates a new ProcessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ProcessResponse instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IProcessResponse): google.cloud.documentai.v1beta3.ProcessResponse;

                    /**
                     * Encodes the specified ProcessResponse message. Does not implicitly {@link google.cloud.documentai.v1beta3.ProcessResponse.verify|verify} messages.
                     * @param message ProcessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ProcessResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.ProcessResponse.verify|verify} messages.
                     * @param message ProcessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ProcessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ProcessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.ProcessResponse;

                    /**
                     * Decodes a ProcessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ProcessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.ProcessResponse;

                    /**
                     * Verifies a ProcessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ProcessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ProcessResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.ProcessResponse;

                    /**
                     * Creates a plain object from a ProcessResponse message. Also converts values to other types if specified.
                     * @param message ProcessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.ProcessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ProcessResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchProcessRequest. */
                interface IBatchProcessRequest {

                    /** BatchProcessRequest name */
                    name?: (string|null);

                    /** BatchProcessRequest inputConfigs */
                    inputConfigs?: (google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchInputConfig[]|null);

                    /** BatchProcessRequest outputConfig */
                    outputConfig?: (google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchOutputConfig|null);

                    /** BatchProcessRequest inputDocuments */
                    inputDocuments?: (google.cloud.documentai.v1beta3.IBatchDocumentsInputConfig|null);

                    /** BatchProcessRequest documentOutputConfig */
                    documentOutputConfig?: (google.cloud.documentai.v1beta3.IDocumentOutputConfig|null);

                    /** BatchProcessRequest skipHumanReview */
                    skipHumanReview?: (boolean|null);
                }

                /** Represents a BatchProcessRequest. */
                class BatchProcessRequest implements IBatchProcessRequest {

                    /**
                     * Constructs a new BatchProcessRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IBatchProcessRequest);

                    /** BatchProcessRequest name. */
                    public name: string;

                    /** BatchProcessRequest inputConfigs. */
                    public inputConfigs: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchInputConfig[];

                    /** BatchProcessRequest outputConfig. */
                    public outputConfig?: (google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchOutputConfig|null);

                    /** BatchProcessRequest inputDocuments. */
                    public inputDocuments?: (google.cloud.documentai.v1beta3.IBatchDocumentsInputConfig|null);

                    /** BatchProcessRequest documentOutputConfig. */
                    public documentOutputConfig?: (google.cloud.documentai.v1beta3.IDocumentOutputConfig|null);

                    /** BatchProcessRequest skipHumanReview. */
                    public skipHumanReview: boolean;

                    /**
                     * Creates a new BatchProcessRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchProcessRequest instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IBatchProcessRequest): google.cloud.documentai.v1beta3.BatchProcessRequest;

                    /**
                     * Encodes the specified BatchProcessRequest message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessRequest.verify|verify} messages.
                     * @param message BatchProcessRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IBatchProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchProcessRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessRequest.verify|verify} messages.
                     * @param message BatchProcessRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IBatchProcessRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchProcessRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchProcessRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchProcessRequest;

                    /**
                     * Decodes a BatchProcessRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchProcessRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchProcessRequest;

                    /**
                     * Verifies a BatchProcessRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchProcessRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchProcessRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchProcessRequest;

                    /**
                     * Creates a plain object from a BatchProcessRequest message. Also converts values to other types if specified.
                     * @param message BatchProcessRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.BatchProcessRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchProcessRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchProcessRequest {

                    /** Properties of a BatchInputConfig. */
                    interface IBatchInputConfig {

                        /** BatchInputConfig gcsSource */
                        gcsSource?: (string|null);

                        /** BatchInputConfig mimeType */
                        mimeType?: (string|null);
                    }

                    /** Represents a BatchInputConfig. */
                    class BatchInputConfig implements IBatchInputConfig {

                        /**
                         * Constructs a new BatchInputConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchInputConfig);

                        /** BatchInputConfig gcsSource. */
                        public gcsSource: string;

                        /** BatchInputConfig mimeType. */
                        public mimeType: string;

                        /**
                         * Creates a new BatchInputConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchInputConfig instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchInputConfig): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig;

                        /**
                         * Encodes the specified BatchInputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig.verify|verify} messages.
                         * @param message BatchInputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchInputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig.verify|verify} messages.
                         * @param message BatchInputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchInputConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchInputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig;

                        /**
                         * Decodes a BatchInputConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchInputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig;

                        /**
                         * Verifies a BatchInputConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchInputConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchInputConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig;

                        /**
                         * Creates a plain object from a BatchInputConfig message. Also converts values to other types if specified.
                         * @param message BatchInputConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.BatchProcessRequest.BatchInputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchInputConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a BatchOutputConfig. */
                    interface IBatchOutputConfig {

                        /** BatchOutputConfig gcsDestination */
                        gcsDestination?: (string|null);
                    }

                    /** Represents a BatchOutputConfig. */
                    class BatchOutputConfig implements IBatchOutputConfig {

                        /**
                         * Constructs a new BatchOutputConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchOutputConfig);

                        /** BatchOutputConfig gcsDestination. */
                        public gcsDestination: string;

                        /**
                         * Creates a new BatchOutputConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BatchOutputConfig instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchOutputConfig): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig;

                        /**
                         * Encodes the specified BatchOutputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig.verify|verify} messages.
                         * @param message BatchOutputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BatchOutputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig.verify|verify} messages.
                         * @param message BatchOutputConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.BatchProcessRequest.IBatchOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BatchOutputConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BatchOutputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig;

                        /**
                         * Decodes a BatchOutputConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BatchOutputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig;

                        /**
                         * Verifies a BatchOutputConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BatchOutputConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BatchOutputConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig;

                        /**
                         * Creates a plain object from a BatchOutputConfig message. Also converts values to other types if specified.
                         * @param message BatchOutputConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.BatchProcessRequest.BatchOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BatchOutputConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a BatchProcessResponse. */
                interface IBatchProcessResponse {
                }

                /** Represents a BatchProcessResponse. */
                class BatchProcessResponse implements IBatchProcessResponse {

                    /**
                     * Constructs a new BatchProcessResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IBatchProcessResponse);

                    /**
                     * Creates a new BatchProcessResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchProcessResponse instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IBatchProcessResponse): google.cloud.documentai.v1beta3.BatchProcessResponse;

                    /**
                     * Encodes the specified BatchProcessResponse message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessResponse.verify|verify} messages.
                     * @param message BatchProcessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IBatchProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchProcessResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessResponse.verify|verify} messages.
                     * @param message BatchProcessResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IBatchProcessResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchProcessResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchProcessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchProcessResponse;

                    /**
                     * Decodes a BatchProcessResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchProcessResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchProcessResponse;

                    /**
                     * Verifies a BatchProcessResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchProcessResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchProcessResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchProcessResponse;

                    /**
                     * Creates a plain object from a BatchProcessResponse message. Also converts values to other types if specified.
                     * @param message BatchProcessResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.BatchProcessResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchProcessResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchProcessMetadata. */
                interface IBatchProcessMetadata {

                    /** BatchProcessMetadata state */
                    state?: (google.cloud.documentai.v1beta3.BatchProcessMetadata.State|keyof typeof google.cloud.documentai.v1beta3.BatchProcessMetadata.State|null);

                    /** BatchProcessMetadata stateMessage */
                    stateMessage?: (string|null);

                    /** BatchProcessMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BatchProcessMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** BatchProcessMetadata individualProcessStatuses */
                    individualProcessStatuses?: (google.cloud.documentai.v1beta3.BatchProcessMetadata.IIndividualProcessStatus[]|null);
                }

                /** Represents a BatchProcessMetadata. */
                class BatchProcessMetadata implements IBatchProcessMetadata {

                    /**
                     * Constructs a new BatchProcessMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IBatchProcessMetadata);

                    /** BatchProcessMetadata state. */
                    public state: (google.cloud.documentai.v1beta3.BatchProcessMetadata.State|keyof typeof google.cloud.documentai.v1beta3.BatchProcessMetadata.State);

                    /** BatchProcessMetadata stateMessage. */
                    public stateMessage: string;

                    /** BatchProcessMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BatchProcessMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** BatchProcessMetadata individualProcessStatuses. */
                    public individualProcessStatuses: google.cloud.documentai.v1beta3.BatchProcessMetadata.IIndividualProcessStatus[];

                    /**
                     * Creates a new BatchProcessMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchProcessMetadata instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IBatchProcessMetadata): google.cloud.documentai.v1beta3.BatchProcessMetadata;

                    /**
                     * Encodes the specified BatchProcessMetadata message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessMetadata.verify|verify} messages.
                     * @param message BatchProcessMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IBatchProcessMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchProcessMetadata message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessMetadata.verify|verify} messages.
                     * @param message BatchProcessMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IBatchProcessMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchProcessMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchProcessMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchProcessMetadata;

                    /**
                     * Decodes a BatchProcessMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchProcessMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchProcessMetadata;

                    /**
                     * Verifies a BatchProcessMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchProcessMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchProcessMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchProcessMetadata;

                    /**
                     * Creates a plain object from a BatchProcessMetadata message. Also converts values to other types if specified.
                     * @param message BatchProcessMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.BatchProcessMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchProcessMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BatchProcessMetadata {

                    /** Properties of an IndividualProcessStatus. */
                    interface IIndividualProcessStatus {

                        /** IndividualProcessStatus inputGcsSource */
                        inputGcsSource?: (string|null);

                        /** IndividualProcessStatus status */
                        status?: (google.rpc.IStatus|null);

                        /** IndividualProcessStatus outputGcsDestination */
                        outputGcsDestination?: (string|null);

                        /** IndividualProcessStatus humanReviewOperation */
                        humanReviewOperation?: (string|null);

                        /** IndividualProcessStatus humanReviewStatus */
                        humanReviewStatus?: (google.cloud.documentai.v1beta3.IHumanReviewStatus|null);
                    }

                    /** Represents an IndividualProcessStatus. */
                    class IndividualProcessStatus implements IIndividualProcessStatus {

                        /**
                         * Constructs a new IndividualProcessStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.documentai.v1beta3.BatchProcessMetadata.IIndividualProcessStatus);

                        /** IndividualProcessStatus inputGcsSource. */
                        public inputGcsSource: string;

                        /** IndividualProcessStatus status. */
                        public status?: (google.rpc.IStatus|null);

                        /** IndividualProcessStatus outputGcsDestination. */
                        public outputGcsDestination: string;

                        /** IndividualProcessStatus humanReviewOperation. */
                        public humanReviewOperation: string;

                        /** IndividualProcessStatus humanReviewStatus. */
                        public humanReviewStatus?: (google.cloud.documentai.v1beta3.IHumanReviewStatus|null);

                        /**
                         * Creates a new IndividualProcessStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IndividualProcessStatus instance
                         */
                        public static create(properties?: google.cloud.documentai.v1beta3.BatchProcessMetadata.IIndividualProcessStatus): google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus;

                        /**
                         * Encodes the specified IndividualProcessStatus message. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus.verify|verify} messages.
                         * @param message IndividualProcessStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.documentai.v1beta3.BatchProcessMetadata.IIndividualProcessStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IndividualProcessStatus message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus.verify|verify} messages.
                         * @param message IndividualProcessStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.documentai.v1beta3.BatchProcessMetadata.IIndividualProcessStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IndividualProcessStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IndividualProcessStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus;

                        /**
                         * Decodes an IndividualProcessStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IndividualProcessStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus;

                        /**
                         * Verifies an IndividualProcessStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IndividualProcessStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IndividualProcessStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus;

                        /**
                         * Creates a plain object from an IndividualProcessStatus message. Also converts values to other types if specified.
                         * @param message IndividualProcessStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.documentai.v1beta3.BatchProcessMetadata.IndividualProcessStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IndividualProcessStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        WAITING = 1,
                        RUNNING = 2,
                        SUCCEEDED = 3,
                        CANCELLING = 4,
                        CANCELLED = 5,
                        FAILED = 6
                    }
                }

                /** Properties of a ReviewDocumentRequest. */
                interface IReviewDocumentRequest {

                    /** ReviewDocumentRequest inlineDocument */
                    inlineDocument?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ReviewDocumentRequest humanReviewConfig */
                    humanReviewConfig?: (string|null);

                    /** ReviewDocumentRequest document */
                    document?: (google.cloud.documentai.v1beta3.IDocument|null);
                }

                /** Represents a ReviewDocumentRequest. */
                class ReviewDocumentRequest implements IReviewDocumentRequest {

                    /**
                     * Constructs a new ReviewDocumentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IReviewDocumentRequest);

                    /** ReviewDocumentRequest inlineDocument. */
                    public inlineDocument?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ReviewDocumentRequest humanReviewConfig. */
                    public humanReviewConfig: string;

                    /** ReviewDocumentRequest document. */
                    public document?: (google.cloud.documentai.v1beta3.IDocument|null);

                    /** ReviewDocumentRequest source. */
                    public source?: "inlineDocument";

                    /**
                     * Creates a new ReviewDocumentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReviewDocumentRequest instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IReviewDocumentRequest): google.cloud.documentai.v1beta3.ReviewDocumentRequest;

                    /**
                     * Encodes the specified ReviewDocumentRequest message. Does not implicitly {@link google.cloud.documentai.v1beta3.ReviewDocumentRequest.verify|verify} messages.
                     * @param message ReviewDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IReviewDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReviewDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.ReviewDocumentRequest.verify|verify} messages.
                     * @param message ReviewDocumentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IReviewDocumentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReviewDocumentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReviewDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.ReviewDocumentRequest;

                    /**
                     * Decodes a ReviewDocumentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReviewDocumentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.ReviewDocumentRequest;

                    /**
                     * Verifies a ReviewDocumentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReviewDocumentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReviewDocumentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.ReviewDocumentRequest;

                    /**
                     * Creates a plain object from a ReviewDocumentRequest message. Also converts values to other types if specified.
                     * @param message ReviewDocumentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.ReviewDocumentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReviewDocumentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReviewDocumentResponse. */
                interface IReviewDocumentResponse {

                    /** ReviewDocumentResponse gcsDestination */
                    gcsDestination?: (string|null);
                }

                /** Represents a ReviewDocumentResponse. */
                class ReviewDocumentResponse implements IReviewDocumentResponse {

                    /**
                     * Constructs a new ReviewDocumentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IReviewDocumentResponse);

                    /** ReviewDocumentResponse gcsDestination. */
                    public gcsDestination: string;

                    /**
                     * Creates a new ReviewDocumentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReviewDocumentResponse instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IReviewDocumentResponse): google.cloud.documentai.v1beta3.ReviewDocumentResponse;

                    /**
                     * Encodes the specified ReviewDocumentResponse message. Does not implicitly {@link google.cloud.documentai.v1beta3.ReviewDocumentResponse.verify|verify} messages.
                     * @param message ReviewDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IReviewDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReviewDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.ReviewDocumentResponse.verify|verify} messages.
                     * @param message ReviewDocumentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IReviewDocumentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReviewDocumentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReviewDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.ReviewDocumentResponse;

                    /**
                     * Decodes a ReviewDocumentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReviewDocumentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.ReviewDocumentResponse;

                    /**
                     * Verifies a ReviewDocumentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReviewDocumentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReviewDocumentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.ReviewDocumentResponse;

                    /**
                     * Creates a plain object from a ReviewDocumentResponse message. Also converts values to other types if specified.
                     * @param message ReviewDocumentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.ReviewDocumentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReviewDocumentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ReviewDocumentOperationMetadata. */
                interface IReviewDocumentOperationMetadata {

                    /** ReviewDocumentOperationMetadata state */
                    state?: (google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata.State|keyof typeof google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata.State|null);

                    /** ReviewDocumentOperationMetadata stateMessage */
                    stateMessage?: (string|null);

                    /** ReviewDocumentOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ReviewDocumentOperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ReviewDocumentOperationMetadata commonMetadata */
                    commonMetadata?: (google.cloud.documentai.v1beta3.ICommonOperationMetadata|null);
                }

                /** Represents a ReviewDocumentOperationMetadata. */
                class ReviewDocumentOperationMetadata implements IReviewDocumentOperationMetadata {

                    /**
                     * Constructs a new ReviewDocumentOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.IReviewDocumentOperationMetadata);

                    /** ReviewDocumentOperationMetadata state. */
                    public state: (google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata.State|keyof typeof google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata.State);

                    /** ReviewDocumentOperationMetadata stateMessage. */
                    public stateMessage: string;

                    /** ReviewDocumentOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ReviewDocumentOperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ReviewDocumentOperationMetadata commonMetadata. */
                    public commonMetadata?: (google.cloud.documentai.v1beta3.ICommonOperationMetadata|null);

                    /**
                     * Creates a new ReviewDocumentOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReviewDocumentOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.IReviewDocumentOperationMetadata): google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata;

                    /**
                     * Encodes the specified ReviewDocumentOperationMetadata message. Does not implicitly {@link google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata.verify|verify} messages.
                     * @param message ReviewDocumentOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.IReviewDocumentOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReviewDocumentOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata.verify|verify} messages.
                     * @param message ReviewDocumentOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.IReviewDocumentOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReviewDocumentOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReviewDocumentOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata;

                    /**
                     * Decodes a ReviewDocumentOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReviewDocumentOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata;

                    /**
                     * Verifies a ReviewDocumentOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReviewDocumentOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReviewDocumentOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata;

                    /**
                     * Creates a plain object from a ReviewDocumentOperationMetadata message. Also converts values to other types if specified.
                     * @param message ReviewDocumentOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.ReviewDocumentOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReviewDocumentOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ReviewDocumentOperationMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        CANCELLING = 2,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        CANCELLED = 5
                    }
                }

                /** Properties of a CommonOperationMetadata. */
                interface ICommonOperationMetadata {

                    /** CommonOperationMetadata state */
                    state?: (google.cloud.documentai.v1beta3.CommonOperationMetadata.State|keyof typeof google.cloud.documentai.v1beta3.CommonOperationMetadata.State|null);

                    /** CommonOperationMetadata stateMessage */
                    stateMessage?: (string|null);

                    /** CommonOperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CommonOperationMetadata updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CommonOperationMetadata. */
                class CommonOperationMetadata implements ICommonOperationMetadata {

                    /**
                     * Constructs a new CommonOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.documentai.v1beta3.ICommonOperationMetadata);

                    /** CommonOperationMetadata state. */
                    public state: (google.cloud.documentai.v1beta3.CommonOperationMetadata.State|keyof typeof google.cloud.documentai.v1beta3.CommonOperationMetadata.State);

                    /** CommonOperationMetadata stateMessage. */
                    public stateMessage: string;

                    /** CommonOperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CommonOperationMetadata updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CommonOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommonOperationMetadata instance
                     */
                    public static create(properties?: google.cloud.documentai.v1beta3.ICommonOperationMetadata): google.cloud.documentai.v1beta3.CommonOperationMetadata;

                    /**
                     * Encodes the specified CommonOperationMetadata message. Does not implicitly {@link google.cloud.documentai.v1beta3.CommonOperationMetadata.verify|verify} messages.
                     * @param message CommonOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.documentai.v1beta3.ICommonOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommonOperationMetadata message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta3.CommonOperationMetadata.verify|verify} messages.
                     * @param message CommonOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.documentai.v1beta3.ICommonOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommonOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommonOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.documentai.v1beta3.CommonOperationMetadata;

                    /**
                     * Decodes a CommonOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommonOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.documentai.v1beta3.CommonOperationMetadata;

                    /**
                     * Verifies a CommonOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommonOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommonOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.documentai.v1beta3.CommonOperationMetadata;

                    /**
                     * Creates a plain object from a CommonOperationMetadata message. Also converts values to other types if specified.
                     * @param message CommonOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.documentai.v1beta3.CommonOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommonOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CommonOperationMetadata {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        CANCELLING = 2,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        CANCELLED = 5
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Color. */
        interface IColor {

            /** Color red */
            red?: (number|null);

            /** Color green */
            green?: (number|null);

            /** Color blue */
            blue?: (number|null);

            /** Color alpha */
            alpha?: (google.protobuf.IFloatValue|null);
        }

        /** Represents a Color. */
        class Color implements IColor {

            /**
             * Constructs a new Color.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IColor);

            /** Color red. */
            public red: number;

            /** Color green. */
            public green: number;

            /** Color blue. */
            public blue: number;

            /** Color alpha. */
            public alpha?: (google.protobuf.IFloatValue|null);

            /**
             * Creates a new Color instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Color instance
             */
            public static create(properties?: google.type.IColor): google.type.Color;

            /**
             * Encodes the specified Color message. Does not implicitly {@link google.type.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Color message, length delimited. Does not implicitly {@link google.type.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Color;

            /**
             * Decodes a Color message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Color;

            /**
             * Verifies a Color message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Color
             */
            public static fromObject(object: { [k: string]: any }): google.type.Color;

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @param message Color
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Color to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Creates a new DateTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTime instance
             */
            public static create(properties?: google.type.IDateTime): google.type.DateTime;

            /**
             * Encodes the specified DateTime message. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTime message, length delimited. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.DateTime;

            /**
             * Decodes a DateTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.DateTime;

            /**
             * Verifies a DateTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTime
             */
            public static fromObject(object: { [k: string]: any }): google.type.DateTime;

            /**
             * Creates a plain object from a DateTime message. Also converts values to other types if specified.
             * @param message DateTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Creates a new TimeZone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeZone instance
             */
            public static create(properties?: google.type.ITimeZone): google.type.TimeZone;

            /**
             * Encodes the specified TimeZone message. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeZone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeZone;

            /**
             * Decodes a TimeZone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeZone;

            /**
             * Verifies a TimeZone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeZone
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeZone;

            /**
             * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
             * @param message TimeZone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeZone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Money. */
        interface IMoney {

            /** Money currencyCode */
            currencyCode?: (string|null);

            /** Money units */
            units?: (number|Long|string|null);

            /** Money nanos */
            nanos?: (number|null);
        }

        /** Represents a Money. */
        class Money implements IMoney {

            /**
             * Constructs a new Money.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IMoney);

            /** Money currencyCode. */
            public currencyCode: string;

            /** Money units. */
            public units: (number|Long|string);

            /** Money nanos. */
            public nanos: number;

            /**
             * Creates a new Money instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Money instance
             */
            public static create(properties?: google.type.IMoney): google.type.Money;

            /**
             * Encodes the specified Money message. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Money message, length delimited. Does not implicitly {@link google.type.Money.verify|verify} messages.
             * @param message Money message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IMoney, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Money message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Money;

            /**
             * Decodes a Money message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Money
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Money;

            /**
             * Verifies a Money message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Money message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Money
             */
            public static fromObject(object: { [k: string]: any }): google.type.Money;

            /**
             * Creates a plain object from a Money message. Also converts values to other types if specified.
             * @param message Money
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Money, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Money to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PostalAddress. */
        interface IPostalAddress {

            /** PostalAddress revision */
            revision?: (number|null);

            /** PostalAddress regionCode */
            regionCode?: (string|null);

            /** PostalAddress languageCode */
            languageCode?: (string|null);

            /** PostalAddress postalCode */
            postalCode?: (string|null);

            /** PostalAddress sortingCode */
            sortingCode?: (string|null);

            /** PostalAddress administrativeArea */
            administrativeArea?: (string|null);

            /** PostalAddress locality */
            locality?: (string|null);

            /** PostalAddress sublocality */
            sublocality?: (string|null);

            /** PostalAddress addressLines */
            addressLines?: (string[]|null);

            /** PostalAddress recipients */
            recipients?: (string[]|null);

            /** PostalAddress organization */
            organization?: (string|null);
        }

        /** Represents a PostalAddress. */
        class PostalAddress implements IPostalAddress {

            /**
             * Constructs a new PostalAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IPostalAddress);

            /** PostalAddress revision. */
            public revision: number;

            /** PostalAddress regionCode. */
            public regionCode: string;

            /** PostalAddress languageCode. */
            public languageCode: string;

            /** PostalAddress postalCode. */
            public postalCode: string;

            /** PostalAddress sortingCode. */
            public sortingCode: string;

            /** PostalAddress administrativeArea. */
            public administrativeArea: string;

            /** PostalAddress locality. */
            public locality: string;

            /** PostalAddress sublocality. */
            public sublocality: string;

            /** PostalAddress addressLines. */
            public addressLines: string[];

            /** PostalAddress recipients. */
            public recipients: string[];

            /** PostalAddress organization. */
            public organization: string;

            /**
             * Creates a new PostalAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PostalAddress instance
             */
            public static create(properties?: google.type.IPostalAddress): google.type.PostalAddress;

            /**
             * Encodes the specified PostalAddress message. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
             * @param message PostalAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IPostalAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PostalAddress message, length delimited. Does not implicitly {@link google.type.PostalAddress.verify|verify} messages.
             * @param message PostalAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IPostalAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PostalAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PostalAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.PostalAddress;

            /**
             * Decodes a PostalAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PostalAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.PostalAddress;

            /**
             * Verifies a PostalAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PostalAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PostalAddress
             */
            public static fromObject(object: { [k: string]: any }): google.type.PostalAddress;

            /**
             * Creates a plain object from a PostalAddress message. Also converts values to other types if specified.
             * @param message PostalAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.PostalAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PostalAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
