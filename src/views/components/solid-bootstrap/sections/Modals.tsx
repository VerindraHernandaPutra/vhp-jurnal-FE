import {Button, Card, Col, Form, Modal, Row} from "solid-bootstrap";
import {createSignal} from "solid-js";
import {FiArrowLeft} from "solid-icons/fi";
import {Icon} from "@iconify-icon/solid";

const Modals = () => {

    const [showStandardModal, setShowStandardModal] = createSignal(false);

    const [showFsModal, setShowFsModal] = createSignal(false);
    const [showLgModal, setShowLgModal] = createSignal(false);
    const [showSmModal, setShowSmModal] = createSignal(false);

    const [showCenteredModal, setShowCenteredModal] = createSignal(false);

    const [showScrollableModal, setShowScrollableModal] = createSignal(false);

    const [showSuccessModal, setShowSuccessModal] = createSignal(false);
    const [showErrorModal, setShowErrorModal] = createSignal(false);

    return (
        <Row>
            <Col lg={12}>
                <Card>
                    <Card.Body>
                        <Card.Title as="h5" class="mb-0">Modals</Card.Title>
                        <p class="sub-header">
                            A modal plugin allows to add dialogs to your site for lightboxes, user notifications, or
                            completely custom content, etc.
                        </p>

                        <Modal show={showStandardModal()} onHide={() => setShowStandardModal(!showStandardModal())}>
                            <Modal.Header>
                                <Modal.Title as="h4">Add more storage</Modal.Title>
                                <button type="button" class="btn-close"
                                        onClick={() => setShowStandardModal(!showStandardModal())}/>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>You are out of storage space.</h5>
                                <p>To upload more data, please add additional storage space.</p>
                                <Form class="d-flex align-items-center gap-2">
                                    <Form.Label>Select Size: </Form.Label>
                                    <Form.Select class="my-1 me-sm-2 w-50">
                                        <option selected>Choose...</option>
                                        <option value="1">1 GB</option>
                                        <option value="10">10 GB</option>
                                        <option value="50">50 GB</option>
                                        <option value="100">100 GB</option>
                                        <option value="500">500 GB</option>
                                        <option value="1000">1 TB</option>
                                    </Form.Select>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="white"
                                        onClick={() => setShowStandardModal(!showStandardModal())}>Cancel</Button>
                                <Button variant="primary"
                                        onClick={() => setShowStandardModal(!showStandardModal())}>Upgrade</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal fullscreen show={showFsModal()} onHide={() => setShowFsModal(!showFsModal())}>
                            <Modal.Header>
                                <Modal.Title as="h4">Full screen modal</Modal.Title>
                                <button type="button" class="btn-close"
                                        onClick={() => setShowFsModal(!showFsModal())}/>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>

                        <Modal size="lg" show={showLgModal()} onHide={() => setShowLgModal(!showLgModal())}>
                            <Modal.Header>
                                <Modal.Title as="h4">Large modal</Modal.Title>
                                <button type="button" class="btn-close"
                                        onClick={() => setShowLgModal(!showLgModal())}/>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>

                        <Modal size="sm" show={showSmModal()} onHide={() => setShowSmModal(!showSmModal())}>
                            <Modal.Header>
                                <Modal.Title as="h4">Small modal</Modal.Title>
                                <button type="button" class="btn-close"
                                        onClick={() => setShowSmModal(!showSmModal())}/>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>


                        <Modal centered show={showCenteredModal()}
                               onHide={() => setShowCenteredModal(!showCenteredModal())}>
                            <Modal.Header>
                                <Modal.Title as="h4">Center modal</Modal.Title>
                                <button type="button" class="btn-close"
                                        onClick={() => setShowCenteredModal(!showCenteredModal())}/>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Overflowing text to show scroll behavior</h5>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl
                                    consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
                                    faucibus dolor auctor.</p>
                            </Modal.Body>
                        </Modal>

                        <Modal scrollable show={showScrollableModal()}
                               onHide={() => setShowScrollableModal(!showScrollableModal())}>
                            <Modal.Header>
                                <Modal.Title as="h4">Modal title
                                </Modal.Title>
                                <button type="button" class="btn-close"
                                        onClick={() => setShowScrollableModal(!showScrollableModal())}/>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                    cursus magna, vel scelerisque nisl consectetur et. Donec sed
                                    odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                    cursus magna, vel scelerisque nisl consectetur et. Donec sed
                                    odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                    cursus magna, vel scelerisque nisl consectetur et. Donec sed
                                    odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                    cursus magna, vel scelerisque nisl consectetur et. Donec sed
                                    odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                    cursus magna, vel scelerisque nisl consectetur et. Donec sed
                                    odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo
                                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                                    risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                    et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor.</p>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                    cursus magna, vel scelerisque nisl consectetur et. Donec sed
                                    odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="white"
                                        onClick={() => setShowScrollableModal(!showScrollableModal())}>Close</Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal>

                        <Modal show={showSuccessModal()}
                               onHide={() => setShowSuccessModal(!showSuccessModal())}>
                            <Modal.Header class="border-bottom-0 pb-0">
                                <button type="button" class="btn-close"
                                        onClick={() => setShowSuccessModal(!showSuccessModal())}/>
                            </Modal.Header>
                            <Modal.Body class="text-center pt-0">
                                <span class="icon icon-xl text-success">
                                     <Icon icon="solar-check-circle-broken" style="font-size:4rem"/>
                                </span>
                                <h4 class="text-success mt-0">Awesome!</h4>
                                <p class="mx-auto text-muted">We received your application and will
                                    process
                                    it shortly.</p>
                                <div class="mt-4">
                                    <a href="#" class="btn btn-white btn-sm" data-bs-dismiss="modal">
                                        <FiArrowLeft class="icon-xxs me-1"/>Back
                                    </a>
                                </div>
                            </Modal.Body>
                        </Modal>

                        <Modal show={showErrorModal()}
                               onHide={() => setShowErrorModal(!showErrorModal())}>
                            <Modal.Header class="border-bottom-0 pb-0">
                                <button type="button" class="btn-close"
                                        onClick={() => setShowErrorModal(!showErrorModal())}/>
                            </Modal.Header>
                            <Modal.Body class="text-center pt-0">
                                <span class="icon icon-xl text-danger">
                                    <Icon icon="solar-sad-circle-bold" style="font-size:4rem"/>
                                </span>
                                <h4 class="text-danger mt-0">Something went wrong.</h4>
                                <p class="mx-auto text-muted mt-2">
                                    We are unable to process your request at the moment. Our appologies,
                                    try
                                    back in about 5 minutes.
                                </p>
                                <div class="mt-4">
                                    <a href="#" class="btn btn-white btn-sm" data-bs-dismiss="modal">
                                        <FiArrowLeft class="icon-xxs me-1"/>Back
                                    </a>
                                </div>
                            </Modal.Body>

                        </Modal>

                        <Row>
                            <Col>
                                <Button variant="soft-primary" class="mb-2 mb-sm-0"
                                        onClick={() => setShowStandardModal(!showStandardModal())}>Standard modal
                                </Button>

                                <Button variant="soft-secondary" class="ms-0 ms-sm-5 mb-2 mb-sm-0"
                                        onClick={() => setShowFsModal(!showFsModal())}>Full Screen
                                </Button>

                                <Button variant="soft-success" class="ms-0 ms-sm-2"
                                        onClick={() => setShowLgModal(!showLgModal())}>Large
                                </Button>

                                <Button variant="soft-info" class="ms-2"
                                        onClick={() => setShowSmModal(!showSmModal())}>Small
                                </Button>
                            </Col>
                        </Row>


                        <Row class="mt-4">
                            <Col>
                                <p class="sub-header">
                                    You can vertically center a modal by passing the <code>centered</code> prop.
                                </p>
                                <Button variant="soft-primary"
                                        onClick={() => setShowCenteredModal(!showCenteredModal())}>Vertically center
                                </Button>
                            </Col>
                        </Row>

                        <Row class="mt-4">
                            <Col>
                                <p class="sub-header">
                                    You can also create a scrollable modal that allows scroll the modal body by adding
                                    <code>scrollable</code> prop.
                                </p>
                                <Button variant="soft-primary"
                                        onClick={() => setShowScrollableModal(!showScrollableModal())}>Scrollable
                                </Button>
                            </Col>
                        </Row>

                        <Row class="mt-4">
                            <Col>
                                <p class="sub-header">
                                    A modal can be used to show contextual messages including success, error, warning,
                                    information messages, etc.
                                </p>
                                <Button variant="soft-success" class="ms-2"
                                        onClick={() => setShowSuccessModal(!showSuccessModal())}>Success
                                </Button>
                                <Button variant="soft-danger" class="ms-2"
                                        onClick={() => setShowErrorModal(!showErrorModal())}>Error
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Modals;