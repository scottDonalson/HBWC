package rocks.hbwc.hbwc_spring_react.web.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rocks.hbwc.hbwc_spring_react.services.WrestlerService;
import rocks.hbwc.hbwc_spring_react.web.errors.BadRequestException;
import rocks.hbwc.hbwc_spring_react.web.models.Wrestler;

import java.util.List;

/**
 * @author ksdon
 **/

@RestController
@RequestMapping("/api/wrestlers")
public class WrestlerRestController {

    private final WrestlerService wrestlerService;

    public WrestlerRestController(WrestlerService wrestlerService) {
        this.wrestlerService = wrestlerService;
    }

    @GetMapping
    public List<Wrestler> getWrestlers(@RequestParam(name="email", required=false) String email) {
        return this.wrestlerService.getAllWrestlers(email);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Wrestler createWrestler(@RequestBody Wrestler wrestler) {
        return this.wrestlerService.createOrUpdate(wrestler);
    }

    @GetMapping("/{id}")
    public Wrestler getWrestlerById(@PathVariable("id") long id) {
        return this.wrestlerService.getWrestler(id);
    }

    @PutMapping("/{id}")
    public Wrestler updateWrestler(@PathVariable("id") long id, @RequestBody Wrestler wrestler) {
        if(id != wrestler.getWrestler_id()){
            throw new BadRequestException("id mismatch");
        }

        return this.wrestlerService.createOrUpdate(wrestler);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    public void deleteWrestler(@PathVariable("id") long id) {
        this.wrestlerService.deleteWrestler(id);
    }
}
